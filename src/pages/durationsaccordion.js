import React, { useContext, useState } from "react";
import {
  Accordion,
  Card,
  CardModal,
  Duration,
  Form,
} from "components";
import { DurationCardContainer } from "containers/card-components/durationcard";
import { FirebaseContext } from "context/firebase";
import { useGetBehaviorsData } from "hooks/get-data-hooks/use-get-behaviors-data";
import { AnimatePresence } from "framer-motion";
import { MotionVariants } from "constants/motionVariants";

export default function DurationsAccordion({ client, sessionId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newBehaviorName, setNewBehaviorName] = useState("");
  const [addDurationFormOpen, setAddDurationFormOpen] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const { behaviorsList, loading } = useGetBehaviorsData(
    client.docId,
    sessionId
  );
  const { accordionVariants } = MotionVariants();

  const handleAddNewDuration = (e) => {
    e.preventDefault();

    setAddDurationFormOpen(false);
    firebase
      .firestore()
      .collection("behaviors")
      .doc()
      .set({
        behaviorName: newBehaviorName,
        clientId: client.docId,
        sessionId: sessionId,
        type: "duration",
      })
      .then(() => {
        setNewBehaviorName("");
        setDropdownOpen(false);
        // setAddDurationFormOpen(false);
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
        bringForward={addDurationFormOpen}
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
              <Form.Button onClick={handleAddNewDuration}>Add</Form.Button>
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
              addDurationFormOpen ? { scale: 0.85, y: -10 } : { scale: 1, y: 0 }
            }
            onClick={() => setIsOpen(!isOpen)}
            open={isOpen}
          >
            Duration
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
        <Card.RightContainer >
          <Card.IconContainer
            iconType="add-tracker"
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
              setAddDurationFormOpen(false);
            }}
          >
            <Card.DropdownIcon iconColor="light" open={dropdownOpen} />

            {/* </Accordion.IconContainer> */}
          </Card.IconContainer>
          <AnimatePresence>
            {dropdownOpen && !addDurationFormOpen && (
              <Duration.DropdownContainer
                visible={dropdownOpen && !addDurationFormOpen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: {duration: 0} }}
              >
                <Duration.Dropdown
                  expand={addDurationFormOpen}
                  visible={dropdownOpen}
                >
                  {!addDurationFormOpen && (
                    <Duration.DropdownItem
                      onClick={() => setAddDurationFormOpen(true)}
                    >
                      Add New Duration
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
        <DurationCardContainer
          behaviorName="Tantrum"
          client={client}
          sessionId={sessionId}
          layout
        />
        <DurationCardContainer
          behaviorName="Elopement"
          client={client}
          sessionId={sessionId}
          layout
        />
        <DurationCardContainer
          behaviorName="Hitting"
          client={client}
          sessionId={sessionId}
          layout
        />
        {!loading &&
          behaviorsList
            .filter((behavior) => behavior.type === "duration")
            .map((behavior, index) => {
              return (
                <DurationCardContainer
                  behaviorName={behavior.behaviorName}
                  behaviorId={behavior.docId}
                  isCustomDuration={true}
                  client={client}
                  sessionId={sessionId}
                  layout
                  key={index}
                />
              );
            })}
      </Accordion.ItemsContainer>
    </Accordion>
    // </motion.div>
  );
}
