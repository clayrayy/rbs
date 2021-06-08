import { FirebaseContext } from "context/firebase";
import { useContext, useState, useEffect } from "react";

export function useGetBehaviorsData(openClient, sessionId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [behaviorsList, setBehaviorsList] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  const behaviorsRef = firebase
    .firestore()
    .collection("behaviors")
    .where("clientId", "==", openClient)
    .where("sessionId", "==", sessionId);

  useEffect(() => {
    const unsubscribe = behaviorsRef.onSnapshot(
      (snapshot) => {
        let behaviorListData = [];
        snapshot.forEach((doc) => {
          behaviorListData.push({
            behaviorName: doc.data().behaviorName,
            docId: doc.id,
            sessionId: sessionId,
            type: doc.data().type,
          });
        });
        setLoading(false);
        setBehaviorsList(behaviorListData);
      },
      (err) => setError(err)
    );
    return () => unsubscribe();
  }, []);
  return { error, loading, behaviorsList };
}
