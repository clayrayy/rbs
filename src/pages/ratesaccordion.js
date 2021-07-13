import { Accordion, Card, CardModal, Duration, Form } from "components";
import { MotionVariants } from "constants/motionVariants";
import { RateCardContainer } from "containers/card-components/ratecard";
import { FirebaseContext } from "context/firebase";
import { AnimatePresence } from "framer-motion";
import { useGetBehaviorsData } from "hooks/get-data-hooks/use-get-behaviors-data";
import React, { useState, useContext } from "react";

export default function RatesAccordion({ client, sessionId, isRunning }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newBehaviorName, setNewBehaviorName] = useState("");
  const [addRateFormOpen, setAddRateFormOpen] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const { behaviorsList, loading } = useGetBehaviorsData(
    client.docId,
    sessionId
  );
  const { accordionVariants } = MotionVariants();
  const handleAddNewRate = (e) => {
    e.preventDefault();

    setAddRateFormOpen(false);
    firebase
      .firestore()
      .collection("behaviors")
      .doc()
      .set({
        behaviorName: newBehaviorName,
        clientId: client.docId,
        sessionId: sessionId,
        type: "rate",
      })
      .then(() => {
        setNewBehaviorName("");
        setDropdownOpen(false);
        // setAddRateFormOpen(false);
      });
  };

  return (
    <Accordion open={isOpen}>
      <CardModal
        modalType="add-tracker"
        blackout={dropdownOpen}
        dropdownOpen
        bringForward={addRateFormOpen}
      >
        <CardModal.CenterContainer>
          <Form>
            <Form.Base formType="add-duration">
              <Form.Input
                inputType="new-behavior"
                onChange={({ target }) => {
                  setNewBehaviorName(target.value);
                }}
                value={newBehaviorName}
                placeholder="Enter Behavior"
              />
              <Form.Button onClick={handleAddNewRate}>Add</Form.Button>
            </Form.Base>
          </Form>
        </CardModal.CenterContainer>
      </CardModal>
      <Accordion.TitleContainer>
        <Card.LeftContainer />
        <Card.CenterContainer>
          <Accordion.Title
            animate={
              addRateFormOpen ? { scale: 0.85, y: -10 } : { scale: 1, y: 0 }
            }
            onClick={() => setIsOpen(!isOpen)}
            open={isOpen}
          >
            Rate
          </Accordion.Title>

          <Card.DownArrow
            iconColor="light"
            className="session"
            open={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* </Accordion.Frame> */}
        </Card.CenterContainer>
        <Card.RightContainer>
          <Card.IconContainer
            iconType="add-tracker"
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
              setAddRateFormOpen(false);
            }}
          >
            <Card.DropdownIcon iconColor="light" open={dropdownOpen} />

            {/* </Accordion.IconContainer> */}
          </Card.IconContainer>
          <AnimatePresence>
            {dropdownOpen && !addRateFormOpen && (
              <Duration.DropdownContainer
                visible={dropdownOpen && !addRateFormOpen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Duration.Dropdown
                  expand={addRateFormOpen}
                  visible={dropdownOpen}
                >
                  {!addRateFormOpen && (
                    <Duration.DropdownItem
                      onClick={() => setAddRateFormOpen(true)}
                    >
                      Add New Rate
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
        <RateCardContainer
          behaviorName="Tantrum"
          client={client}
          sessionId={sessionId}
          layout
        />
        <RateCardContainer
          behaviorName="Elopement"
          client={client}
          sessionId={sessionId}
          layout
        />
        <RateCardContainer
          behaviorName="Hitting"
          client={client}
          sessionId={sessionId}
          layout
        />
        {!loading &&
          behaviorsList
            .filter((behavior) => behavior.type === "rate")
            .map((behavior, index) => {
              return (
                <RateCardContainer
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
  );
}
