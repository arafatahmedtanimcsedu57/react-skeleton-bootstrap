import React from "react";

import AppRoute from "./config/route";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FunctionComponent<unknown> = () : JSX.Element => {
  return (
    // handle routes
    <AppRoute />
  );
};

export default App;
