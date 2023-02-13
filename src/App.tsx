import React from "react";
import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import MainContent from "./components/other/MainContent";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
