import React from "react";
import { ClientCardContainer } from "containers/card-components/clientcard";
import useClientData from "hooks/get-data-hooks/use-get-clients";
import { HeaderContainer } from "containers/header";
import { Card, Header } from "components";
import LoadingContainer from "containers/loading";
// import useGetSessionEvents from "hooks/get-data-hooks/use-getsessionevents";
import { AnimateSharedLayout, motion } from "framer-motion";
import { MotionVariants} from "constants/motionVariants";

export default function ClientList() {
  const { clients, loading } = useClientData();
  const { pageTransitions } =
    MotionVariants();

  // console.log(durationsData)

  return (
    <>
      <HeaderContainer
        backIcon={false}
        addIcon={true}
        title="Clients"
        name="clients"
      />
      <motion.div
        variants={pageTransitions}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {loading ? (
          <LoadingContainer />
        ) : (
          // <AnimateSharedLayout>
            <>
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
            </>
          // </AnimateSharedLayout>
        )}
      </motion.div>
    </>
  );
}
