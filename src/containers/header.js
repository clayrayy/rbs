// *****address problems refactoring addbehavor and addclient into remote components

import React, { useState, useContext } from "react";
import { Header, Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthListener } from "hooks";
import * as ROUTES from "../constants/routes";
import { AnimatePresence } from "framer-motion";
import { MotionVariants } from "constants/motionVariants";

export function HeaderContainer({
  data,
  title,
  addIcon,
  name,
  backIcon,
  showMenu,
  backFromDatasheet,
  sessionActive,
  subtitle,
  sessionData,
  sessionFunctions,
}) {
  const [menuOpen, setMenuOpen] = useState(false); // activates slideout menu
  const [addClientFormOpen, setAddClientFormOpen] = useState(false); // activates slideout menu to add client
  const [firstName, setFirstName] = useState(""); //sets add client first name
  const [lastName, setLastName] = useState(""); //sets add client first name
  const [confirmEndSessionActive, setConfirmEndSessionActive] = useState(false);
  const [backActive, setBackActive] = useState(false); //activates change to animate back icon
  let history = useHistory();
  const location = useLocation();
  const {menuVariants} = MotionVariants()
  // const { sessionIsRunning, setSessionIsRunning, isPaused, setIsPaused } =
  //   sessionFunctions;

  // const { toggleAnimations } = useContext(AnimationsContext); -- removed because toggling animations had neglegable impact on performance
  const { user } = useAuthListener();
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();
  function goBack() {
    history.push(ROUTES.CLIENT_LIST);
  }

  function formatClientName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewClient = (e) => {
    e.preventDefault();
    setAddClientFormOpen(false);
    db.collection(`clients`)
      .doc()
      .set({
        first: firstName,
        last: lastName,
        ownerUid: user.email,
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  // const endSession = () => {
  //   // TODO: make this function fire when current page changes via router instead of a modal that pops up when back button is pressed
  //   firebase
  //     .firestore()
  //     .collection("sessions")
  //     .doc(sessionData.sessionId)
  //     .update({
  //       sessionId: sessionData.sessionId, //adds sessionId to session document when session is completed so ID can be pushed via useHistory to session datasheet
  //       sessionLength: sessionData.sessionLength, // sets session length upon session completion
  //     });
  // };

  return (
    <Header>
      {/*below is unused confirm end session modal. changed strategy to use react router prompt that fires end session function to patch issue where session was ending with NaN:NaN as session length when route changed by any method other than back icon in header. Leaving code commented in in case I get around to implementing different strategy to use the more elegant modal solution. Prompts are uggo..*/}

      {/* <CardModal blackout={confirmEndSessionActive} bringForward={confirmEndSessionActive}>
                <CardModal.CenterContainer>
                    <Form>
                        <Form.Title>
                            Navigating to previous page will end current session
                            <br />
                            Any trials running will be lost
                        </Form.Title>
                        <Form.Button buttonType='confirm' onClick={(e) =>{
                            e.preventDefault()
                            endSession()
                            history.goBack()
                            }}>Confirm</Form.Button>
                        <Form.Button buttonType='cancel' onClick={(e)=> {
                            e.preventDefault()
                            setConfirmEndSessionActive(false)
                        }}>Cancel</Form.Button>
                    </Form>
                </CardModal.CenterContainer>
            </CardModal> */}

      {/* Client List Menu */}
      <AnimatePresence>
        {location.pathname === "/clientlist" && menuOpen && (
          <Header.MenuDiv
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuVariants}
            open={menuOpen}
          >
            <Header.Menu>
              <Header.MenuItem key="profile">
                <Header.MenuLink to={ROUTES.PROFILE}>Profile</Header.MenuLink>
              </Header.MenuItem>

              {/* <Header.MenuItem
                key="about"
                onClick={toggleAnimations}
              >
                Enable Fancy Animations
              </Header.MenuItem> */}

              <Header.MenuItem key="signout">
                <p onClick={signOut}>Sign Out</p>
              </Header.MenuItem>
            </Header.Menu>
          </Header.MenuDiv>
        )}

        {/* Session Menu */}
        {location.pathname === "/session" && menuOpen && (
          <Header.MenuDiv
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuVariants}
            open={menuOpen}
          >
            <Header.Menu>
              <Header.MenuItem
                onClick={() => {
                  sessionFunctions.setSessionIsRunning(
                    !sessionFunctions.sessionIsRunning
                  );
                  sessionFunctions.setIsPaused(!sessionFunctions.isPaused);
                }}
              >
                Pause Session
              </Header.MenuItem>
              <Header.MenuItem
                key="about"
                onClick={() => history.push(ROUTES.CLIENT_LIST)}
              >
                End Session
              </Header.MenuItem>
              <Header.MenuItem>How To Use</Header.MenuItem>
            </Header.Menu>
          </Header.MenuDiv>
        )}
      </AnimatePresence>

      <Header.IconSpacer>
        {backIcon && (
          <Header.BackIcon
            active={backActive}
            onClick={() => {
              goBack();
              !sessionActive && setBackActive(true);
            }}
          />
        )}
      </Header.IconSpacer>
      <Header.TitleContainer>
        <Header.Title>{title}</Header.Title>
        {subtitle && <Header.Subtitle>{subtitle}</Header.Subtitle>}
      </Header.TitleContainer>
      <Header.IconSpacer>
        {addIcon && (
          <Header.IconContainer
            name="add"
            hideWhen={menuOpen}
            open={addClientFormOpen}
            onClick={() => setAddClientFormOpen(!addClientFormOpen)}
          >
            <Header.AddItemIcon open={addClientFormOpen} />
          </Header.IconContainer>
        )}
        {showMenu !== "false" && (
          <Header.IconContainer
            name="menu"
            hideWhen={addClientFormOpen}
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Header.Hamburger open={menuOpen} />
          </Header.IconContainer>
        )}
      </Header.IconSpacer>
      <Header.AddItemForm open={addClientFormOpen}>
        {name === "clients" && (
          <Form>
            <Form.Base formType="add-client">
              <Form.Title>Enter Client Name</Form.Title>
              <Form.Input
                formType="add-client"
                placeholder="First Name"
                value={firstName}
                onChange={({ target }) =>
                  setFirstName(formatClientName(target.value))
                }
              />
              <Form.Input
                formType="add-client"
                placeholder="Last Name"
                value={lastName}
                onChange={({ target }) =>
                  setLastName(formatClientName(target.value))
                }
              />
              <Form.Button formType="add-client" onClick={addNewClient}>
                Add Client
              </Form.Button>
            </Form.Base>
          </Form>
        )}
      </Header.AddItemForm>
    </Header>
  );
}
// GET ABBREVIATED NAME SNIPPET
// `${firstName.charAt(0).toUpperCase()}${firstName.charAt(1).toLowerCase()}${lastName.charAt(0).toUpperCase()}${lastName.charAt(1).toLowerCase()}`
