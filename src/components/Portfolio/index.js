import React from 'react';
import PortfoioCard from '../PortfolioCard';
import {projects} from './projects.js';
import Carousel from 'react-bootstrap/Carousel';

const styles = {
  header: {
      color: "white",
      textAlign: "center",
      marginTop: "6vh",
      marginLeft: "6vw",
      marginRight: "6vw",
      padding: "2vh"
  },
}

export default function Portfolio() {
  return (
    <Carousel interval="3000" variant="dark" style={styles.header} className="rounded">
      {/* <h1>Recent Projects</h1> */}
      
      {projects.map((element) => {
        
        return <Carousel.Item>
          <PortfoioCard project={element}></PortfoioCard>
         </Carousel.Item>
      })}
     
    </Carousel>
  );
}
