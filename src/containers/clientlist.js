import React, { useState, useContext } from "react";
import { Card, CardModal, ClientCard, Form } from "../components";
import { useGetSessionsData } from "hooks/get-data-hooks/use-get-sessions";
import { useHistory } from "react-router";
import { FirebaseContext } from "context/firebase";
import { useAuthListener } from "hooks";
import * as ROUTES from "../constants/routes";
import { formatTotalTime } from "utils/formatTime";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import {
  accordionVariants,
  item,
  list,
  modalVariants,
} from "constants/motionVariants";

export function ClientListContainer({ client }) {
  /* ---Begin State Variable Declarations--- */

  const [sessionName, setSessionName] = useState("");
  // Handles input data from 'session name' input field in add session form
  const [takenBy, setTakenBy] = useState("");
  // Handles input data from 'taken by' input field in add session form
  const [showSessions, setShowSessions] = useState(false);
  // Determines whether past sessions dropdown is open or not
  const [expandCardForModal, setExpandCardForModal] = useState(false);
  // Used for styling to alter card size to account for add session modal.
  // Passed into styled component via props.
  const [bringUpModal, setBringUpModal] = useState(false);
  // Handles increasing z-index when add session modal is active
  // Passed intostyled component via props

  /* --- End State Variable Declarations--- */

  const { sessions, loading } = useGetSessionsData(client.docId);
  // Queries firestore for all sessions data associated with
  // given client ID
  const { user } = useAuthListener();
  // listener to determine logged in user

  const { firebase } = useContext(FirebaseContext);
  const sessionRef = firebase.firestore().collection("sessions");
  const history = useHistory();
  const clientName = `${client.first} ${client.last}`;
  let now = dayjs();

  const toggleAddSession = () => {
    if (!bringUpModal) {
      setShowSessions(false);
      setBringUpModal(true);
      setTimeout(() => {
        setExpandCardForModal(true);
      }, 350);
    } else {
      setExpandCardForModal(false);
      setTimeout(() => {
        setBringUpModal(false);
      }, 350);
    }
  };
  // Toggles appropriate layout changes to bring up add session modal

  const handleStartNewSession = (e) => {
    e.preventDefault();
    sessionRef
      .add({
        sessionName: sessionName || "",
        takenBy: takenBy,
        clientId: client.docId,
        clientName: clientName,
        createdBy: user.email,
        serverTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
        unixTime: now.unix(),
        date: now.format("MM/DD/YYYY"),
        tod: dayjs().format("h:mm a"),
      })
      .then((docRef) => {
        history.push({
          pathname: ROUTES.SESSION,
          state: {
            client: client,
            currentSessionId: docRef.id,
            takenBy: takenBy,
            sessionLength: 0,
            sessionName: `${sessionName ? sessionName : ""}`,
          },
        });
      });
  };
  // Handles creating new session document and pushing sessions page
  // into history with necessary state variables

  function handleOpenSessionDatasheet(session) {
    history.push({
      pathname: ROUTES.DATASHEET,
      state: {
        session: session,
      },
    });
  }

  return (
    <Card
      open={showSessions}
      expandForSmallScreen={expandCardForModal}
      sessions={sessions}
      cardType="client"
      layout
    >
      <AnimatePresence>
        {/* Start add new session modal */}
        {expandCardForModal && bringUpModal && (
          <CardModal
            key={"cardboi"}
            // as={motion.div}
            initial="collapsed"
            animate="open"
            exit="exit"
            variants={modalVariants}
            // blackout={showAddSessionModal}

            bringForward={bringUpModal}
          >
            <Form formType="add-session">
              <Form.Title>New Session for {clientName}</Form.Title>
              <Form.Base
                formType="add-session"
                expandForSmallScreen={expandCardForModal}
              >
                <Form.Input
                  formType="add-session"
                  placeholder="Session Name (optional)"
                  name="sessionName"
                  gridArea="n"
                  value={sessionName}
                  onChange={({ target }) => setSessionName(target.value)}
                />
                <Form.Input
                  formType="add-session"
                  placeholder="Taken By (optional)"
                  name="takenBy"
                  gridArea="t"
                  value={takenBy}
                  addMarginLeft={true}
                  onChange={({ target }) => setTakenBy(target.value)}
                />
                <Form.Button
                  type="submit"
                  gridArea="s"
                  buttonType="confirm"
                  formType="add-session"
                  onClick={handleStartNewSession}
                >
                  Start
                </Form.Button>
                <Form.Button
                  buttonType="cancel"
                  gridArea="c"
                  formType="add-session"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAddSession();
                  }}
                >
                  Cancel
                </Form.Button>
              </Form.Base>
            </Form>
          </CardModal>
        )}
      </AnimatePresence>
      <Card.Top>
        {/* End add new session modal */}

        <Card.LeftContainer
          containerType="past-sessions-icon"
          onClick={() => setShowSessions(!showSessions)}
        >
          <ClientCard.IconContainer>
            <ClientCard.Text>
              Previous
              <br />
              Sessions
            </ClientCard.Text>
            <ClientCard.DownArrow open={showSessions} />
          </ClientCard.IconContainer>
        </Card.LeftContainer>

        <Card.CenterContainer>
          <ClientCard.Title>{clientName}</ClientCard.Title>
        </Card.CenterContainer>

        <Card.RightContainer>
          <ClientCard.SessionButton onClick={toggleAddSession}>
            <ClientCard.ButtonText>New Session</ClientCard.ButtonText>
          </ClientCard.SessionButton>
        </Card.RightContainer>
      </Card.Top>

      <AnimatePresence initial={false}>
        {showSessions && !expandCardForModal && (
          <Card.Dropdown
            key="sessions"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
            as={motion.div}
            dropdowntype="sessions-list"
            // sessions={sessions}
            open={showSessions}
          >
            {sessions.length === 0 ? (
              <Card.ColumnsLabels>
                <Card.CenterContainer>
                  <Card.ListText>No sessions yet</Card.ListText>
                </Card.CenterContainer>
              </Card.ColumnsLabels>
            ) : (
              <>
                <Card.ColumnsLabels columnType="instruction-text">
                  <Card.CenterContainer>
                    <Card.Text>Select a past session for details</Card.Text>
                  </Card.CenterContainer>
                </Card.ColumnsLabels>
                <Card.ColumnsLabels>
                  <Card.LeftContainer>
                    <Card.Text>Date</Card.Text>
                  </Card.LeftContainer>
                  <Card.CenterContainer>
                    <Card.Text>Taken By</Card.Text>
                  </Card.CenterContainer>
                  <Card.RightContainer>
                    <Card.Text>Total Time</Card.Text>
                  </Card.RightContainer>
                </Card.ColumnsLabels>
              </>
            )}
            <motion.div initial="hidden" animate="show" variants={list}>
              {loading ? (
                <p>Loading</p>
              ) : (
                sessions
                  .sort((a, b) => a.unixTime - b.unixTime)
                  .map((session, index) => {
                    return (
                      <Card.SessionItem
                        as={motion.div}
                        variants={item}
                        itemType="link-to-session"
                        key={index}
                        onClick={() => handleOpenSessionDatasheet(session)}
                      >
                        <Card.LeftContainer>
                          <Card.ListText textType="session-date">
                            {session.date}
                          </Card.ListText>
                        </Card.LeftContainer>
                        <Card.CenterContainer>
                          {session.sessionName ? (
                            <Card.ListText textType="session-name">
                              {session.takenBy}
                            </Card.ListText>
                          ) : (
                            <Card.ListText textType="session-name">
                              <em>-</em>
                            </Card.ListText>
                          )}
                        </Card.CenterContainer>
                        <Card.RightContainer>
                          <Card.ListText>
                            {formatTotalTime(session.sessionLength)}
                          </Card.ListText>
                        </Card.RightContainer>
                      </Card.SessionItem>
                    );
                  })
              )}
            </motion.div>

            <Card.CenterContainer>
              <Card.Text>{sessions.length} Total</Card.Text>
            </Card.CenterContainer>
          </Card.Dropdown>
        )}
      </AnimatePresence>
    </Card>
  );
}
