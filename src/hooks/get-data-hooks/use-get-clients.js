import { FirebaseContext } from "context/firebase";
import { useAuthListener } from "hooks";
import { useEffect, useState, useContext } from "react";

export default function useGetClients() {
  // const [content, setContent] = useState([])
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();
  const clientsRef = firebase
    .firestore()
    .collection("clients")
    .where("ownerUid", "==", user.email);

  useEffect(() => {
    const unsubscribe = user && clientsRef.onSnapshot(
      (snapshot) => {
        let content = [];
        snapshot.docs.forEach((contentObj) => {
          content.push({
            ...contentObj.data(),
            docId: contentObj.id,
          });
        });
        setClients(content);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
    return unsubscribe;
    
  }, []);

  return { clients, loading };
}
