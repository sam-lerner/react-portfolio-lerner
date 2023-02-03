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

export default function Home() {
  return (
    <div style={styles.card}>
      <h1>Welcome!</h1>
      <p>
        Thank you for visiting my site. Here you will find information about me, including my latest projects and my resume. 
        <br>
        </br>
        I would love to hear from you, especially if you are hoping to offer me  money. Please reach out via the contact form!
      </p>
    </div>
  );
}
