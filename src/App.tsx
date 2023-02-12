import React from "react";
import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <img src="/assets/image.png" />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
