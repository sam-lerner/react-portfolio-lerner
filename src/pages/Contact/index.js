import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai';

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
  }
}
export default function Contact() {
  return (
    <div style={styles.card}>
      <h1>Contact Page</h1>
      <ul>
      <a href="mailto:sam.a.lerner@gmail.com"><AiFillMail/></a>
      <a href="https://www.linkedin.com/in/sam-lerner-5943b41b3/" ><AiFillLinkedin/></a>
        <a href="https://github.com/sam-lerner" ><AiFillGithub/></a>
        </ul>
    </div>
  );
}