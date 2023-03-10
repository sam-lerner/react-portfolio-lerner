// This will serve up the portfolio cards
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picture from '../../assets/images/codehire.jpg'
import JASON from "../Portfolio/projects.json"

export default function PortfolioCard({ project }) {
    { console.log(project) }
{console.log(JASON)}
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
         <br></br>
        <a href={project.deployed_url}>Deployed project</a>
        <br></br>
        <a href={project.repo_url}>Github Repo</a>
        <br></br>
        <img className="d-block mx-auto img-fluid" style={{margin:10, padding: 10, maxHeight:500}} src={project.image_link}/>
        </div>

}