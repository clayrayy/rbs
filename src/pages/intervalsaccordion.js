import React, { useContext, useState } from "react";
import { Accordion, Duration, Form, Intervals } from "components";
import { FirebaseContext } from "context/firebase";
import { useGetBehaviorsData } from "hooks/get-data-hooks/use-get-behaviors-data";
import { AnimatePresence, motion } from "framer-motion";
import { MotionVariants } from "constants/motionVariants";

import { IntervalCardContainer } from "containers/card-components/intervals-card";
import { RateCardContainer } from "containers/card-components/ratecard";

export default function IntervalsAccordion({
  client,
  sessionId,
  isRunning,
  intervalType,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newBehaviorName, setNewBehaviorName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [addIntervalFormOpen, setAddIntervalFormOpen] = useState(false);
  const { behaviorsList, loading } = useGetBehaviorsData(
    client.docId,
    sessionId
  );
  const { accordionVariants, pageTransitions, deleteEventVariant } =
    MotionVariants();

  const { firebase } = useContext(FirebaseContext);
  const handleAddNewInterval = (e) => {
    e.preventDefault();

    setAddIntervalFormOpen(false);
    firebase
      .firestore()
      .collection("behaviors")
      .doc()
      .set({
        behaviorName: newBehaviorName,
        clientId: client.docId,
        sessionId: sessionId,
        type: intervalType,
      })
      .then(() => {
        setNewBehaviorName("");
        setDropdownOpen(false);
        setAddIntervalFormOpen(false);
      });
  };

  return (
    <motion.div
      variants={pageTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Accordion open={isOpen}>
        <Accordion.TitleContainer>
          <Accordion.IconContainer />
          <Accordion.Frame>
            <Accordion.Title onClick={() => setIsOpen(!isOpen)} open={isOpen}>
              {intervalType === "wholeInterval"
                ? "Whole Interval"
                : "Partial Interval"}
            </Accordion.Title>

            <Intervals.MoreInfo
              className="session"
              open={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </Accordion.Frame>

          <Accordion.IconContainer
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
              setTimeout(() => {
                setAddIntervalFormOpen(false);
              }, 250);
            }}
          >
            <Accordion.IconPositioner>
              <Accordion.DropdownIcon open={dropdownOpen} />
            </Accordion.IconPositioner>
          </Accordion.IconContainer>
          <Accordion.DropdownContainer visible={dropdownOpen}>
            <AnimatePresence>
              <Accordion.Dropdown
                expand={addIntervalFormOpen}
                visible={dropdownOpen}
                variants={deleteEventVariant}
                initial="collapsed"
                animate="open"
                exit="exit"
              >
                {!addIntervalFormOpen ? (
                  <Duration.DropdownItem>
                    <p onClick={() => setAddIntervalFormOpen(true)}>
                      Add Custom Interval
                    </p>
                  </Duration.DropdownItem>
                ) : (
                  <Form shrink={!addIntervalFormOpen}>
                    <Form.Base formType="add-duration">
                      <Form.Input
                        onChange={({ target }) => {
                          setNewBehaviorName(target.value);
                        }}
                        value={newBehaviorName}
                        placeholder="Enter Behavior"
                      />
                      <Form.Button onClick={handleAddNewInterval}>
                        Add
                      </Form.Button>
                    </Form.Base>
                  </Form>
                )}
              </Accordion.Dropdown>
            </AnimatePresence>
          </Accordion.DropdownContainer>
        </Accordion.TitleContainer>
        <Accordion.ItemsContainer
          initial="collapsed"
          animate={isOpen ? "open" : "collapsed"}
          variants={accordionVariants}
          open={isOpen}
        >
          {intervalType === "wholeInterval" ? (
            <>
              <IntervalCardContainer
                behaviorName="Elopement"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
                intervalType="wholeInterval"
              />
              <IntervalCardContainer
                behaviorName="Tantrum"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
                intervalType="wholeInterval"
              />
              <IntervalCardContainer
                behaviorName="Pooping"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
                intervalType="wholeInterval"
              />
              {!loading &&
                behaviorsList
                  .filter((behavior) => behavior.type === "wholeInterval")
                  .map((behavior, index) => {
                    return (
                      <IntervalCardContainer
                        key={index}
                        behaviorName={behavior.behaviorName}
                        behaviorId={behavior.docId}
                        isCustomInterval={true}
                        client={client}
                        sessionId={sessionId}
                        isRunning={isRunning}
                        layout
                        intervalType="wholeInterval"
                      />
                    );
                  })}
            </>
          ) : (
            <>
              <IntervalCardContainer
                behaviorName="Elopement"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                intervalType="partialInterval"
                layout
              />
              <IntervalCardContainer
                behaviorName="Tantrum"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                intervalType="partialInterval"
                layout
              />
              <IntervalCardContainer
                behaviorName="Pooping"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                intervalType="partialInterval"
                layout
              />
              <RateCardContainer />

              {!loading &&
                behaviorsList
                  .filter((behavior) => behavior.type === "partialInterval")
                  .map((behavior, index) => {
                    return (
                      <IntervalCardContainer
                        key={index}
                        behaviorName={behavior.behaviorName}
                        behaviorId={behavior.docId}
                        isCustomInterval={true}
                        client={client}
                        sessionId={sessionId}
                        isRunning={isRunning}
                        intervalType="partialInterval"
                        layout
                      />
                    );
                  })}
            </>
          )}
        </Accordion.ItemsContainer>
      </Accordion>
    </motion.div>
  );
}
