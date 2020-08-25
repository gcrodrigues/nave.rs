import React from "react";

import { AuthProvider } from "./contexts/auth";
import Routes from "./routes";
import GlobalStyles from "./assets/styles/global";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
