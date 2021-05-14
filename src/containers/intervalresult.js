import { Card } from "components";
import React from "react";
import { formatTotalTime } from "utils/formatTime";

export function IntervalResultContainer({ behavior, name }) {
  const results = behavior.filter((item) => item[0].behaviorName === name);

  // console.log(totalOccurances)
  return results.map((result) => {
    let totalOccurrances = 0;

    result.forEach((item) => item.result && totalOccurrances++);
    // if value of result == true, increment totalOccurrances

    return (
      <Card>
        <Card.ColumnsLabels>
          <Card.LeftContainer containerType="datasheet">
            <Card.Text>Behavior</Card.Text>
          </Card.LeftContainer>
          <Card.CenterContainer>
            <Card.Text>Interval Length</Card.Text>
          </Card.CenterContainer>
          <Card.RightContainer containerType="datasheet">
            <Card.Text>Total Occurrances (X)</Card.Text>
          </Card.RightContainer>
        </Card.ColumnsLabels>
        <Card.Dropdown open={true}>
          <Card.SessionItem>
            <Card.LeftContainer containerType="datasheet">
              {name}
            </Card.LeftContainer>
            <Card.CenterContainer containerType="datasheet">
              {formatTotalTime(result[0].intervalLength)}
            </Card.CenterContainer>
            <Card.RightContainer containerType="datasheet">
              {totalOccurrances}
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
