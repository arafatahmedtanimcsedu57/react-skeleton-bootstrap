import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";

const Home: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <Stack direction="vertical" className="justify-content-center">
      <div className="align-self-center ">
        <header className="text-center ">
          <h1>Welcome to Skeleton!</h1>
        </header>
        <main className="text-center ">
          <p className="fs-5">Hello World</p>
        </main>
        <footer className="text-center ">
          <Link to="/login" className="font-monospace bd-highlight fs-3">
            Proceed to Login
          </Link>
        </footer>
      </div>
    </Stack>
  );
};

export default Home;
