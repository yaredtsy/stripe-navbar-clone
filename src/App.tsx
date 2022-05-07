import React from "react";
import { Layout } from "./components/Layout";
import NavBar from "./components/NavBar/NavBar";
import GLobalStyles from "./styles/GLobalStyles";

function App() {
  return (
    <>
      <Layout>
        <NavBar />
      </Layout>
      <GLobalStyles />
    </>
  );
}

export default App;
