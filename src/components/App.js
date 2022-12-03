import React, { useContext, useState } from "react";
import { UserProvider } from "../context/user";
import { UserTheme } from "../context/theme";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  const { theme, setTheme } = useContext(UserTheme);
  return (
    <main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
