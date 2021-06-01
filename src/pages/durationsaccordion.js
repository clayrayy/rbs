import React, { useContext, useState } from "react";
import {
  Accordion,
  Duration,
  Form,
  Intervals,
} from "components";
import { DurationCardContainer } from "containers/card-components/durationcard";
import { FirebaseContext } from "context/firebase";
import { useGetBehaviorsData } from "hooks/get-data-hooks/use-get-behaviors-data";
import {  motion } from "framer-motion";
import {  MotionVariants } from "constants/motionVariants";

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
  const { accordionVariants, pageTransitions } =
    MotionVariants();

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
        setAddDurationFormOpen(false);
      });
  };

  return (
    <motion.div
      variants={pageTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      
    <Accordion layout open={isOpen}>
      {/* <CardModal
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
      </CardModal> */}

      <Accordion.TitleContainer>
        <Accordion.IconContainer />
        <Accordion.Frame>
          <Accordion.Title onClick={() => setIsOpen(!isOpen)} open={isOpen}>
            Duration
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
              setAddDurationFormOpen(false);
            }, 250);
          }}
        >
          <Accordion.IconPositioner>
            <Accordion.DropdownIcon isOpen={dropdownOpen} />
          </Accordion.IconPositioner>
        </Accordion.IconContainer>

        <Accordion.DropdownContainer visible={dropdownOpen}>
          <Accordion.Dropdown
            expand={addDurationFormOpen}
            visible={dropdownOpen}
          >
            {!addDurationFormOpen ? (
              <Duration.DropdownItem>
                <p onClick={() => setAddDurationFormOpen(true)}>
                  Add Custom Duration
                </p>
              </Duration.DropdownItem>
            ) : (
              <Form shrink={!addDurationFormOpen}>
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
            )}
          </Accordion.Dropdown>
        </Accordion.DropdownContainer>
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
          behaviorName="Pooping"
          client={client}
          sessionId={sessionId}
          layout
        />
        {!loading &&
          behaviorsList
            .filter((behavior) => behavior.type === "duration")
            .map((behavior) => {
              return (
                <DurationCardContainer
                  behaviorName={behavior.behaviorName}
                  behaviorId={behavior.docId}
                  isCustomDuration={true}
                  client={client}
                  sessionId={sessionId}
                  layout
                />
              );
            })}
      </Accordion.ItemsContainer>
    </Accordion>
    </motion.div>
  );
}
