import React, { Fragment } from "react";
import { HeaderContainer } from "containers/header";
import { useLocation } from "react-router";
import dayjs from "dayjs";
import useGetSessionEvents from "hooks/get-data-hooks/use-getsessionevents";
import { Card } from "components";
import LoadingContainer from "containers/loading";
import { formatTotalTime } from "utils/formatTime";
import { IntervalResultContainer } from "containers/intervalresult";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransitions } from "constants/motionVariants";

export default function Datasheet() {
  const location = useLocation();
  const session = location.state.session;
  const { eventsData, loading } = useGetSessionEvents(session.sessionId);
  const intervalsData = eventsData.filter(
    (event) => event.eventType === "interval"
  );
  const durationsData = eventsData.filter(
    (event) => event.eventType === "duration"
  );
  const subtitle = `${session.date} - ${session.tod}`;
  let uniqueBehaviorsArr = [];
  let intervalGraphs = [];

  intervalsData.forEach((interval) => {
    if (!uniqueBehaviorsArr.includes(interval.behaviorName)) {
      uniqueBehaviorsArr.push(interval.behaviorName);
    }
  });
  // iterates through intervals data to pick out unique behaviors
  // & pushes them into uniqueBehaviorsArr

  !loading &&
    uniqueBehaviorsArr.forEach((behavior) => {
      let x = intervalsData.filter(
        (interval) => interval.behaviorName === behavior
      );
      intervalGraphs.push(x);
    });
  // iterates through each unique behavior and creates an array of all
  // interval events that have a matching behaviorName

  return (
    <>
      <HeaderContainer
        backIcon={true}
        title={session.sessionName ? session.sessionName : "Session"}
        subtitle={subtitle}
      />
        {loading ? (
          <LoadingContainer key='loading'/>
        ) : (
          <motion.div
            variants={pageTransitions}
            initial="hidden"
            animate="show"
            exit="exit"
          >
          <Fragment key='results'>
            <Card>
              <Card.Title>Details</Card.Title>

              <Card.ColumnsLabels>
                <Card.Text>Date</Card.Text>
                <Card.Text>Taken By</Card.Text>
                <Card.Text>Session Length</Card.Text>
              </Card.ColumnsLabels>

              <Card.Dropdown>
                <Card.SessionItem>
                  <Card.LeftContainer containerType="datasheet">
                    {subtitle}
                  </Card.LeftContainer>
                  <Card.CenterContainer containerType="datasheet">
                    {session.takenBy}
                  </Card.CenterContainer>
                  <Card.RightContainer containerType="datasheet">
                    {formatTotalTime(session.sessionLength)}
                  </Card.RightContainer>
                </Card.SessionItem>
              </Card.Dropdown>
            </Card>

            <Card>
              <Card.CenterContainer>
                <Card.Title>Whole Intervals</Card.Title>
              </Card.CenterContainer>
              <AnimatePresence>
                {uniqueBehaviorsArr.map((item, index) => {
                  return (
                    <IntervalResultContainer
                      behavior={intervalGraphs}
                      name={item}
                      key={index}
                    />
                  );
                })}
              </AnimatePresence>
            </Card>
            {durationsData.length !== 0 && (
              <Card>
                <Card.CenterContainer>
                  <Card.Title>Durations</Card.Title>
                </Card.CenterContainer>
                <Card.ColumnsLabels>
                  <Card.LeftContainer containerType="datasheet">
                    <Card.ListText textType="column-label">
                      Behavior
                    </Card.ListText>
                  </Card.LeftContainer>
                  <Card.CenterContainer></Card.CenterContainer>
                  <Card.RightContainer containerType="datasheet">
                    <Card.ListText textType="column-label">Time</Card.ListText>
                  </Card.RightContainer>
                </Card.ColumnsLabels>
                <Card.Dropdown open={true}>
                  {durationsData.map((event, index) => (
                    <Card.SessionItem key={index}>
                      <Card.LeftContainer containerType="datasheet">
                        <Card.ListText>{event.behaviorName}</Card.ListText>
                      </Card.LeftContainer>
                      <Card.CenterContainer />

                      <Card.RightContainer containerType="datasheet">
                        <Card.ListText>
                          {formatTotalTime(event.seconds)}
                        </Card.ListText>
                      </Card.RightContainer>
                    </Card.SessionItem>
                  ))}
                </Card.Dropdown>
              </Card>
            )}
          </Fragment>
      </motion.div>
        )}
    </>
  );
}

/* {intervalsData.length === 0 ? (
                        <Card.SessionItem >
                            <Card.CenterContainer>
                                <Card.ListText>No Data</Card.ListText>
                            </Card.CenterContainer>
                        </Card.SessionItem>
                    ) :
                        intervalsData.map((event, index) => (
                            <Card.SessionItem key={index}>
                                <Card.LeftContainer containerType='datasheet'>
                                    <Card.ListText>
                                        {event.behaviorName}
                                    </Card.ListText>
                                </Card.LeftContainer>
                                <Card.CenterContainer>
                                    <Card.ListText>
                                        {event.intervalLength} seconds
                                    </Card.ListText>
                                </Card.CenterContainer>
                                <Card.RightContainer containerType='datasheet'>
                                    <Card.ListText>
                                        {event.result ? 'true' : 'false'}
                                    </Card.ListText>
                                </Card.RightContainer>

                            </Card.SessionItem>

                        ))} */
