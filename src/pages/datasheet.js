import React, { Fragment, useState } from "react";
import { HeaderContainer } from "containers/header";
import { useLocation } from "react-router";
import useGetSessionEvents from "hooks/get-data-hooks/use-getsessionevents";
import { Accordion, Card, ClientCard } from "components";
import LoadingContainer from "containers/loading";
import { formatTotalTime } from "utils/formatTime";
import { IntervalResultContainer } from "containers/intervalresult";
import { AnimatePresence, motion } from "framer-motion";
import { MotionVariants } from "constants/motionVariants";
import { DownArrowIcon } from "components/icons";

export default function Datasheet() {
  const location = useLocation();
  const [wholeIntervalsOpen, setWholeIntervalsOpen] = useState(false);
  const [partialIntervalsOpen, setPartialIntervalsOpen] = useState(false);
  const [durationsOpen, setDurationsOpen] = useState(false);
  const [ratesOpen, setRatesOpen] = useState(false);
  const session = location.state.session;
  const { eventsData, loading } = useGetSessionEvents(session.sessionId);
  const { accordionVariants, pageTransitions } = MotionVariants();
  let uniqueWIBehaviorsArr = [];
  let uniquePIBehaviorsArr = [];

  let wholeIntervalGraphs = [];
  let partialIntervalGraphs = [];
  const subtitle = `${session.date} - ${session.tod}`;
  const wholeIntervalsData = eventsData.filter(
    (event) => event.eventType === "wholeInterval"
  );
  const partialIntervalsData = eventsData.filter(
    (event) => event.eventType === "partialInterval"
  );
  const durationsData = eventsData.filter(
    (event) => event.eventType === "duration"
  );
  const ratesData = eventsData.filter((event) => event.eventType === "rate");
  console.log(ratesData);
  wholeIntervalsData.forEach((interval) => {
    if (!uniqueWIBehaviorsArr.includes(interval.behaviorName)) {
      uniqueWIBehaviorsArr.push(interval.behaviorName);
    }
  });
  partialIntervalsData.forEach((interval) => {
    if (!uniquePIBehaviorsArr.includes(interval.behaviorName)) {
      uniquePIBehaviorsArr.push(interval.behaviorName);
    }
  });
  // iterates through intervals data to pick out unique behaviors
  // & pushes them into uniqueWIBehaviorsArr

  !loading &&
    uniqueWIBehaviorsArr.forEach((behavior) => {
      let x = wholeIntervalsData.filter(
        (interval) => interval.behaviorName === behavior
      );
      wholeIntervalGraphs.push(x);
    });
  !loading &&
    uniquePIBehaviorsArr.forEach((behavior) => {
      let x = partialIntervalsData.filter(
        (interval) => interval.behaviorName === behavior
      );
      partialIntervalGraphs.push(x);
    });
  // iterates through each unique behavior and creates an array of all
  // interval events that have a matching behaviorName
  console.log(session.sessionLength);

  let x = 3600 / session.sessionLength;
  console.log(x);
  return (
    <>
      <HeaderContainer
        backIcon={true}
        title={session.sessionName ? session.sessionName : 'Session'}
        subtitle={subtitle}
        showMenu='false'
      />
      {loading ? (
        <LoadingContainer />
      ) : (
        <motion.div
          variants={pageTransitions}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <Fragment key='results'>
            <Accordion style={{ color: 'white' }}>
              {/* <Card.LeftContainer></Card.LeftContainer> */}
              <Card.CenterContainer containerType='datasheet-title'>
                <Accordion.Title>Details</Accordion.Title>
              </Card.CenterContainer>
              <Card.RightContainer></Card.RightContainer>
              <Card>
                <Card.Row>
                  <Card.LeftContainer containerType='interval-dropdown'>
                    <Card.Text style={{ textAlign: 'center' }}>Date</Card.Text>
                  </Card.LeftContainer>
                  <Card.CenterContainer>
                    <Card.Text>Taken By</Card.Text>
                  </Card.CenterContainer>
                  <Card.RightContainer containerType='interval-dropdown'>
                    <Card.Text>Session Length</Card.Text>
                  </Card.RightContainer>
                </Card.Row>

                {/* <Card.Dropdown> */}
                <Card.SessionItem>
                  <Card.LeftContainer containerType='datasheet'>
                    <Card.ListText>{subtitle}</Card.ListText>
                  </Card.LeftContainer>
                  <Card.CenterContainer containerType='datasheet'>
                    <Card.ListText>{session.takenBy}</Card.ListText>
                  </Card.CenterContainer>
                  <Card.RightContainer containerType='datasheet'>
                    <Card.ListText>
                      {formatTotalTime(session.sessionLength)}
                    </Card.ListText>
                  </Card.RightContainer>
                </Card.SessionItem>
                {/* </Card.Dropdown> */}
              </Card>
            </Accordion>

            <Accordion
              cardType='results'
              style={{ color: 'white', background: 'rgba(0,0,0,.6)' }}
            >
              <Card.Top>
                <Card.LeftContainer></Card.LeftContainer>
                <Card.CenterContainer containerType='results-title'>
                  <Accordion.Title style={{ color: 'white' }}>
                    W. Intervals
                  </Accordion.Title>
                </Card.CenterContainer>
                <Card.RightContainer>
                  <DownArrowIcon
                    isOpen={wholeIntervalsOpen}
                    onClick={() => setWholeIntervalsOpen(!wholeIntervalsOpen)}
                    color='light'
                  />
                </Card.RightContainer>
              </Card.Top>
              <AnimatePresence>
                {wholeIntervalsOpen && (
                  <Card.Dropdown
                    key='intervals-drop'
                    animate='open'
                    initial='collapsed'
                    exit='collapsed'
                    variants={accordionVariants}
                    layout
                  >
                    {uniqueWIBehaviorsArr.map((item, index) => {
                      return (
                        <IntervalResultContainer
                          behavior={wholeIntervalGraphs}
                          name={item}
                          key={index}
                        />
                      )
                    })}
                  </Card.Dropdown>
                )}
              </AnimatePresence>
            </Accordion>
            <Accordion
              cardType='results'
              style={{ color: 'white', background: 'rgba(0,0,0,.6)' }}
            >
              <Card.Top>
                <Card.LeftContainer></Card.LeftContainer>
                <Card.CenterContainer containerType='datasheet-title'>
                  <Accordion.Title>P. Intervals</Accordion.Title>
                </Card.CenterContainer>
                <Card.RightContainer>
                  <DownArrowIcon
                    isOpen={partialIntervalsOpen}
                    onClick={() =>
                      setPartialIntervalsOpen(!partialIntervalsOpen)
                    }
                    color='light'
                  />
                </Card.RightContainer>
              </Card.Top>
              <AnimatePresence>
                {partialIntervalsOpen && (
                  <Card.Dropdown
                    key='intervals-drop'
                    animate='open'
                    initial='collapsed'
                    exit='collapsed'
                    variants={accordionVariants}
                    layout
                  >
                    {uniquePIBehaviorsArr.map((item, index) => {
                      return (
                        <IntervalResultContainer
                          behavior={partialIntervalGraphs}
                          name={item}
                          key={index}
                        />
                      )
                    })}
                  </Card.Dropdown>
                )}
              </AnimatePresence>
            </Accordion>
            {durationsData.length !== 0 && (
              <Accordion
                cardType='results'
                style={{ color: 'white', background: 'rgba(0,0,0,.6)' }}
              >
                <Card.Top>
                  <Card.RightContainer></Card.RightContainer>
                  <Card.CenterContainer>
                    <Accordion.Title>Durations</Accordion.Title>
                  </Card.CenterContainer>
                  <Card.RightContainer>
                    <DownArrowIcon
                      isOpen={durationsOpen}
                      onClick={() => setDurationsOpen(!durationsOpen)}
                      color='light'
                    />
                  </Card.RightContainer>
                </Card.Top>
                <AnimatePresence>
                  {durationsOpen && (
                    <Card.Dropdown
                      key='duration-results-dropdown'
                      open={durationsOpen}
                      animate='open'
                      initial='collapsed'
                      exit='collapsed'
                      variants={accordionVariants}
                      layout
                    >
                      <Card>
                        <Card.Row>
                          <Card.LeftContainer containerType='datasheet'>
                            <Card.Text textType='column-label'>
                              Behavior
                            </Card.Text>
                          </Card.LeftContainer>
                          <Card.CenterContainer></Card.CenterContainer>
                          <Card.RightContainer containerType='datasheet'>
                            <Card.Text textType='column-label'>Time</Card.Text>
                          </Card.RightContainer>
                        </Card.Row>
                        {durationsData.map((event, index) => (
                          <Card.SessionItem
                            itemType='duration-result'
                            key={index}
                          >
                            <Card.LeftContainer containerType='datasheet'>
                              <Card.ListText>
                                {event.behaviorName}
                              </Card.ListText>
                            </Card.LeftContainer>
                            <Card.CenterContainer />

                            <Card.RightContainer containerType='datasheet'>
                              <Card.ListText>
                                {formatTotalTime(event.seconds)}
                              </Card.ListText>
                            </Card.RightContainer>
                          </Card.SessionItem>
                        ))}
                      </Card>
                    </Card.Dropdown>
                  )}
                </AnimatePresence>
              </Accordion>
            )}

            {ratesData.length !== 0 && (
              <Accordion
                cardType='results'
                style={{ color: 'white', background: 'rgba(0,0,0,.6)' }}
              >
                <Card.Top>
                  <Card.RightContainer></Card.RightContainer>
                  <Card.CenterContainer>
                    <Accordion.Title>Rate</Accordion.Title>
                  </Card.CenterContainer>
                  <Card.RightContainer>
                    <DownArrowIcon
                      isOpen={ratesOpen}
                      onClick={() => setRatesOpen(!ratesOpen)}
                      color='light'
                    />
                  </Card.RightContainer>
                </Card.Top>
                <AnimatePresence>
                  {ratesOpen && (
                    <Card.Dropdown
                      key='duration-results-dropdown'
                      open={durationsOpen}
                      animate='open'
                      initial='collapsed'
                      exit='collapsed'
                      variants={accordionVariants}
                      layout
                    >
                      <Card>
                        <Card.ColumnsLabels>
                          <Card.LeftContainer containerType='datasheet'>
                            <Card.Text textType='column-label'>
                              Behavior
                            </Card.Text>
                          </Card.LeftContainer>
                          <Card.CenterContainer>
                            <Card.Text textType='column-label'>
                              Total Occ.
                            </Card.Text>
                          </Card.CenterContainer>
                          <Card.RightContainer containerType='datasheet'>
                            <Card.Text textType='column-label'>
                              Rate/Hr
                            </Card.Text>
                          </Card.RightContainer>
                        </Card.ColumnsLabels>
                        {ratesData.map((event, index) => (
                          <Card.SessionItem
                            itemType='duration-result'
                            key={index}
                          >
                            <Card.LeftContainer containerType='datasheet'>
                              <Card.ListText>
                                {event.behaviorName}
                              </Card.ListText>
                            </Card.LeftContainer>
                            <Card.CenterContainer>
                              <Card.ListText>{event.count}</Card.ListText>
                            </Card.CenterContainer>

                            <Card.RightContainer containerType='datasheet'>
                              {(event.count / x).toFixed(2)}
                            </Card.RightContainer>
                          </Card.SessionItem>
                        ))}
                      </Card>
                    </Card.Dropdown>
                  )}
                </AnimatePresence>
              </Accordion>
            )}
          </Fragment>
        </motion.div>
      )}
    </>
  )
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
