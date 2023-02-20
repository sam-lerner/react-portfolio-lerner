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
      Experienced arts professional with over 15 years of success in creative management. Proven expertise in agile workflow, budgeting, and organization, with exceptional attention to detail. Skilled in communicating and collaborating with diverse teams of both creative and technical personnel. Adaptable problem-solver with a growth mindset, able to thrive in fast-paced environments and adjust to change. Additional strengths include strategic planning, staff development, and fostering relationships with key stakeholders in the arts community.
      </p>
    </div>
  );
}
