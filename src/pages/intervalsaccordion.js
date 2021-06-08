import React, { useContext, useState } from "react";
import { Accordion, Card, CardModal, Duration, Form } from "components";
import { FirebaseContext } from "context/firebase";
import { useGetBehaviorsData } from "hooks/get-data-hooks/use-get-behaviors-data";
import { MotionVariants } from "constants/motionVariants";

import { IntervalCardContainer } from "containers/card-components/intervals-card";
import { AnimatePresence } from "framer-motion";

export default function IntervalsAccordion({
  client,
  sessionId,
  isRunning,
  intervalType,
  accordionType,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newBehaviorName, setNewBehaviorName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [addIntervalFormOpen, setAddIntervalFormOpen] = useState(false);
  const { behaviorsList, loading } = useGetBehaviorsData(
    client.docId,
    sessionId
  );
  const { accordionVariants } = MotionVariants();

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
    // <motion.div
    //   variants={pageTransitions}
    //   initial="hidden"
    //   animate="show"
    //   exit="exit"
    // >
    <Accordion layout>
      <CardModal
        modalType="add-tracker"
        blackout={dropdownOpen}
        dropdownOpen
        bringForward={addIntervalFormOpen}
      >
        <CardModal.CenterContainer>
          <Form>
            <Form.Base formType="add-duration">
              <Form.Input
                onChange={({ target }) => {
                  setNewBehaviorName(target.value);
                }}
                value={newBehaviorName}
                placeholder="Enter Behavior"
              />
              <Form.Button onClick={handleAddNewInterval}>Add</Form.Button>
            </Form.Base>
          </Form>
        </CardModal.CenterContainer>
      </CardModal>

      <Accordion.TitleContainer>
        <Card.LeftContainer />
        {/* <Accordion.Frame> */}
        <Card.CenterContainer>
          <Accordion.Title
            animate={
              addIntervalFormOpen ? { scale: 0.85, y: -10 } : { scale: 1, y: 0 }
            }
            onClick={() => setIsOpen(!isOpen)}
            open={isOpen}
          >
            {intervalType === "wholeInterval" ? "W." : "P."} Interval
          </Accordion.Title>

          <Card.DownArrow
            iconColor="light"
            className="session"
            open={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* </Accordion.Frame> */}
        </Card.CenterContainer>

        {/* <Accordion.IconContainer> */}
        <Card.RightContainer>
          <Card.IconContainer
          iconType='add-tracker'
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
              setAddIntervalFormOpen(false);
            }}
          >
            <Card.DropdownIcon iconColor="light" open={dropdownOpen} />
          </Card.IconContainer>
          {/* </Accordion.IconContainer> */}
          <AnimatePresence>
            {dropdownOpen && !addIntervalFormOpen && (
              <Duration.DropdownContainer
                visible={dropdownOpen && !addIntervalFormOpen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Duration.Dropdown
                  expand={addIntervalFormOpen}
                  visible={dropdownOpen}
                >
                  {!addIntervalFormOpen && (
                    <Duration.DropdownItem
                      onClick={() => setAddIntervalFormOpen(true)}
                    >
                      Add New Interval
                    </Duration.DropdownItem>
                  )}
                </Duration.Dropdown>
              </Duration.DropdownContainer>
            )}
          </AnimatePresence>
        </Card.RightContainer>
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
    // </motion.div>
  );
}
