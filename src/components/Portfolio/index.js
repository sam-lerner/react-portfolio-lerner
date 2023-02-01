import React from 'react';
import PortfoioCard from '../PortfolioCard';
import projects from './projects.json';

const styles = {
  header: {
      color: "white",
      textAlign: "center"
  },
}

export default function Portfolio() {
  return (
    <div style={styles.header} >
      <h1>Recent Projects</h1>
      {projects.map((element) => {
        
        return <PortfoioCard project={element}></PortfoioCard>
      })}
    </div>
  );
}
