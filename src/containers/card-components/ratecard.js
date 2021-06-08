import { Card } from "components";
import { FirebaseContext } from "context/firebase";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";

export function RateCardContainer({ behaviorName, sessionId }) {
  const [count, setCount] = useState(1);
  const [currentDoc, setCurrentDoc] = useState("");
  const [docExists, setDocExists] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const [displayCount, setDisplayCount] = useState(0);
  const newId = `${sessionId.slice(0, 10)}${behaviorName}`;
  const rateRef = firebase.firestore().collection("events").doc(newId);

  useEffect(() => {
    rateRef.get().then((doc) => {
      if (doc.exists) {
        setDocExists(true);
      }
    });
  }, []);

  function handleCountIncrease() {
    setCount(count + 1);
    if (!docExists) {
      rateRef.set({
        behaviorName: behaviorName,
        sessionId: sessionId,
        serverTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
        count: count,
        eventType: 'rate'
      });
    } else
      rateRef.update({
        count: firebase.firestore.FieldValue.increment(1),
      });
  }

    useEffect(() => {

      rateRef.get().then((doc) => {
        if(doc.exists) {
          rateRef.onSnapshot((doc) => {
          setDisplayCount(doc.data().count)
        })
        }
      } )
        
  }, [count])

  return (
    <Card>
      <Card.Top>
        <Card.LeftContainer>
          <Card.ButtonContainer>
            <Card.StartButton onClick={handleCountIncrease}>
              <Card.ButtonText style={{ fontSize: "1.3rem" }}>
                {displayCount}
              </Card.ButtonText>
            </Card.StartButton>
          </Card.ButtonContainer>
        </Card.LeftContainer>
        <Card.CenterContainer>
          <Card.Title>{behaviorName}</Card.Title>
        </Card.CenterContainer>
        <Card.RightContainer></Card.RightContainer>
      </Card.Top>
    </Card>
  );
}
