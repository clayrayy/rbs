import { Card } from "components";
import { motion } from "framer-motion";
import React, { useState } from "react";

export function RateCardContainer() {
    const [count, setCount] = useState(0)

    
  return (
    <Card>
      <Card.Top>
        <Card.LeftContainer>
          <Card.ButtonContainer>
            <Card.StartButton onClick={() => setCount(count + 1)}>
                <Card.ButtonText style={{fontSize: '1.3rem'}}>
                    {count}
                </Card.ButtonText>
            </Card.StartButton>
          </Card.ButtonContainer>
        </Card.LeftContainer>
        <Card.CenterContainer>
          <Card.Title>Screaming</Card.Title>
        </Card.CenterContainer>
        <Card.RightContainer></Card.RightContainer>
      </Card.Top>
    </Card>
  );
}
