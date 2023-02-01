import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import background from "./assets/images/salma.jpg"

const styles = {
  body: {
      // backgroundColor: "rgb(71, 71, 95)",
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
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
