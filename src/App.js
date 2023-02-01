import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const styles = {
  body: {
      backgroundColor: "rgb(71, 71, 95)",
      color: "white",
      fontFamily: "Century Gothic"
  }
}

const App = () => {
  return <div style={styles.body}>
      <PortfolioContainer />;
  </div>
}

export default App;
