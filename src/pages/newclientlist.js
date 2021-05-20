import React from "react";
import { ClientCardContainer } from "containers/card-components/clientcard";
import useClientData from "hooks/get-data-hooks/use-get-clients";
import { HeaderContainer } from "containers/header";
import { Card, Header, Loading } from "components";
import LoadingContainer from "containers/loading";
import useGetSessionEvents from "hooks/get-data-hooks/use-getsessionevents";
import { AnimateSharedLayout, motion } from "framer-motion";
import { pageTransitions } from "constants/motionVariants";

export default function NewClientList() {
  const { clients, loading } = useClientData();

  // console.log(durationsData)

  return (
    <>
      <HeaderContainer
        backIcon={false}
        addIcon={true}
        title="Clients"
        name="clients"
      />
      {loading ? (
        <LoadingContainer />
      ) : (
        <AnimateSharedLayout>
          <motion.div
            variants={pageTransitions}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {!loading && clients.length === 0 && (
              <Card>
                <Card.CenterContainer>
                  <Card.Title>
                    Click or tap <Header.AddItemIcon iconType="example" /> to
                    get started
                  </Card.Title>
                </Card.CenterContainer>
              </Card>
            )}
            {!loading &&
              clients.map((client, index) => {
                const curClient = client;
                return <ClientCardContainer client={curClient} key={index} />;
              })}
          </motion.div>
        </AnimateSharedLayout>
      )}
    </>
  );
}
