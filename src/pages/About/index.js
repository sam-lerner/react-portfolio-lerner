import React from 'react';

const styles = {
  header: {
      backgroundColor: "rgb(218, 135, 34)",
      color: "#2c2471",
      textAlign: "center"
  },
  card: {
      backgroundColor: "#2c2471",
      color: "rgb(218, 135, 34)",
      marginLeft: "6vw",
      marginRight: "6vw",
      marginBottom: "2vh",
      padding: "2vh",
      marginTop: "6vh",
      textAlign: "center"
  }
}

export default function About() {
  return (
    <div style={styles.card}>
      <h1>About Me</h1>
      <p className= "text-start">
        My name is Sam Lerner and I am a full-stack web developer based in northern New Jersey. After a 20 year career working in Sound Design for theater and live performance, I decided to try something new. While I'm still figuring this coding thing out, I am very proud of my progress so far! Thank you for visiting my portfolio. 
      </p>
    </div>
  );
}
