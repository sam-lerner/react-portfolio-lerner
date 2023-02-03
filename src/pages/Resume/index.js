import React from 'react';
import resume from '../../assets/files/sam-lerner-resume.pdf'

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

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Sam-Lerner-Resume.pdf";
  link.click();
};

export default function Resume() {
  return (
    <div style={styles.card}>
      <h1>Resume Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <div className="btnDiv">
        <button id="downloadBtn" onClick={downloadResume} value="download">Download</button>
      </div>
    </div>
  );
}