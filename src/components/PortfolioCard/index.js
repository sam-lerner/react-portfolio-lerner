// This will serve up the portfolio cards
import React from 'react';

export default function PortfolioCard({ project }) {
    { console.log(project) }

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
            paddingBottom: "2vh",
            textAlign: "center"
        }
    }

    return <div style={styles.card}>
        <h3 style={styles.header}>{project.name}</h3>
        <p>{project.description}</p>
        <ul>Technologies used: </ul>
        {project.technologies.map((element) => {
            return <li>{element}</li>
        })}
        <a href={project.deployed_url}>Deployed project</a>
        {/* <img src={project.image_link}>Project image</img> */}
    </div>

}