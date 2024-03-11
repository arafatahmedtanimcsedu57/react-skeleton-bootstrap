import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const AppLayout: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Container className="main-content">
        <Stack direction="vertical" gap={2} className="justify-content-center">
          <Outlet />
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default AppLayout;
