import React from 'react';
import profilePhoto from '../../assets/images/sam-lerner.jpg'

const styles = {
  header: {
      backgroundColor: "rgb(218, 135, 34)",
      color: "#2c2471",
      textAlign: "center"
  },
  card: {
    className:"container",  
    backgroundColor: "#2c2471",
      color: "rgb(218, 135, 34)",
      marginLeft: "6vw",
      marginRight: "6vw",
      marginBottom: "2vh",
      padding: "2vh",
      marginTop: "6vh",
      textAlign: "center"
  },
  photo: {
    imageSize: "20%"
  }
}

export default function About() {
  return (
    <div style={styles.card}>
      <h1>About Me</h1>
      <img src={profilePhoto} class="img-fluid" alt="Photo of Sam Lerner" style={{width: '200px'}} ></img>
      <br></br><br></br>
      <p>
      Experienced project manager with a strong technical background in full-stack web development. Proven ability to lead teams to successful project completion, while utilizing expertise in JavaScript, HTML5, CSS3, SQL, NoSQL, Apollo GraphQL, GitHub, and more. Skilled in communicating and collaborating with diverse teams of both creative and technical personnel. Adaptable problem-solver with a growth mindset, able to thrive in fast-paced environments and adjust to change.
      </p>
    </div>
  );
}
