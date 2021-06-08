import { Card } from "components";
import React from "react";
import { formatTotalTime } from "utils/formatTime";

export function IntervalResultContainer({ behavior, name, intervalType }) {
  const results = behavior.filter((item) => item[0].behaviorName === name);
  console.log(results);

  // console.log(totalOccurances)
  return results.map((result, index) => {
    let totalOccurrances = 0;

    result.forEach((item) => item.result && totalOccurrances++);
    // if value of result == true, increment totalOccurrances

    return (
      <Card key={index}>
        <Card.ColumnsLabels>
          <Card.LeftContainer containerType="interval-dropdown">
            <Card.Text>Behavior</Card.Text>
          </Card.LeftContainer>
          <Card.CenterContainer containerType="interval-dropdown">
            <Card.Text>
              Interval <br />
              Length
            </Card.Text>
          </Card.CenterContainer>
          <Card.RightContainer containerType="interval-dropdown">
            <Card.Text>Total</Card.Text>
          </Card.RightContainer>
        </Card.ColumnsLabels>
        <Card.Dropdown open={true}>
          <Card.SessionItem>
            <Card.LeftContainer containerType="datasheet">
              <Card.ListText>{name}</Card.ListText>
            </Card.LeftContainer>
            <Card.CenterContainer containerType="datasheet">
              <Card.ListText>
                {formatTotalTime(result[0].intervalLength)}
              </Card.ListText>
            </Card.CenterContainer>
            <Card.RightContainer containerType="datasheet">
              <Card.ListText>{totalOccurrances}</Card.ListText>
            </Card.RightContainer>
          </Card.SessionItem>
          <Card.IntervalResultContainer>
            {/* <Card.IntervalResultItem>
                            <Card.Text textType='result-number'>
                                &nbsp;
                                    </Card.Text>
                            <Card.ListText textType='interval-result'>
                                X or O
                            </Card.ListText>
                        </Card.IntervalResultItem> */}
            {result.map((event, index) => {
              return (
                <Card.IntervalResultItem key={index}>
                  <Card.Text textType="result-number">{index + 1}</Card.Text>
                  <Card.ListText textType="interval-result">
                    {event.result ? "X" : "O"}
                  </Card.ListText>
                </Card.IntervalResultItem>
              );
            })}
          </Card.IntervalResultContainer>
        </Card.Dropdown>
      </Card>
    );
  });
}
