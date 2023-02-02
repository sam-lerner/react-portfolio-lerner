import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import background from "./assets/images/salma.jpg"

const styles = {
  body: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: '999999',
    width: '100%',
    minHeight: '150vh',
    height: '150vh',
    fontFamily: "Century Gothic"
  }
}

const App = () => {
  return <div style={styles.body} >
      <PortfolioContainer />;
   
    </div>

}

export default App;
