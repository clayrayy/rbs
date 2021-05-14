import { FirebaseContext } from "context/firebase";
import { useContext, useState, useEffect } from "react";

export default function useGetSessionEvents(sessionId) {
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);
  const sessionEventsRef = firebase
    .firestore()
    .collection("events")
    .where("sessionId", "==", sessionId);

  useEffect(() => {
    sessionEventsRef.get().then((querySnapshot) => {
      let currentData = [];
      querySnapshot.forEach((doc) => {
        currentData.push(doc.data());
      });
      setEventsData(currentData);
      setLoading(false);
    });
  }, []);
  return { eventsData, loading };
}
