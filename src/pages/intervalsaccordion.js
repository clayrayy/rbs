import React, { useContext, useState } from "react";
import { Accordion, Duration, Form, Intervals } from "components";
import { WholeIntervalCardContainer } from "containers/card-components/wholeintervalcard";
import { FirebaseContext } from "context/firebase";
import { useGetBehaviorsData } from "hooks/get-data-hooks/use-get-behaviors-data";
import { AnimatePresence, motion } from "framer-motion";
import {
  accordionVariants,
  deleteEventVariant,
  pageTransitions,
} from "constants/motionVariants";
import { PartialIntervalCardContainer } from "containers/card-components/partialintervalcard";

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
                as={motion.div}
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
          as={motion.div}
          initial="collapsed"
          animate={isOpen ? "open" : "collapsed"}
          variants={accordionVariants}
          open={isOpen}
        >
          {intervalType === "wholeInterval" ? (
            <>
              <WholeIntervalCardContainer
                behaviorName="Elopement"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
              />
              <WholeIntervalCardContainer
                behaviorName="Tantrum"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
              />
              <WholeIntervalCardContainer
                behaviorName="Pooping"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
              />
              {!loading &&
                behaviorsList
                  .filter((behavior) => behavior.type === "wholeInterval")
                  .map((behavior, index) => {
                    return (
                      <WholeIntervalCardContainer
                        key={index}
                        behaviorName={behavior.behaviorName}
                        behaviorId={behavior.docId}
                        isCustomInterval={true}
                        client={client}
                        sessionId={sessionId}
                        isRunning={isRunning}
                        layout
                      />
                    );
                  })}
            </>
          ) : (
            <>
              <PartialIntervalCardContainer
                behaviorName="Elopement"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
              />
              <PartialIntervalCardContainer
                behaviorName="Tantrum"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
              />
              <PartialIntervalCardContainer
                behaviorName="Pooping"
                client={client}
                sessionId={sessionId}
                isRunning={isRunning}
                layout
              />
              {!loading &&
                behaviorsList
                  .filter((behavior) => behavior.type === "partialInterval")
                  .map((behavior, index) => {
                    return (
                      <PartialIntervalCardContainer
                        key={index}
                        behaviorName={behavior.behaviorName}
                        behaviorId={behavior.docId}
                        isCustomInterval={true}
                        client={client}
                        sessionId={sessionId}
                        isRunning={isRunning}
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
