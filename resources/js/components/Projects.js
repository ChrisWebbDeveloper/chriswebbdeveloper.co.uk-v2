import Container from 'react-bootstrap/Container';
import ProjectItem from './ProjectItem';
import AllTechnologies from './AllTechnologies';
import React, { useState } from 'react';

export default function Projects(props) {
    const [displayProjects, setDisplayProjects] = useState("All");

    let allTechnologies = [];
    props.projects.forEach((project) => project.technologies.forEach((tech) => allTechnologies.push(tech.name)));

    //Remove duplicates
    allTechnologies = Array.from(new Set(allTechnologies));

    props.projects.forEach((project) => {
        let display = false;
        for (let i = 0; i < project.technologies.length; i++) {
            if (displayProjects === project.technologies[i].name || displayProjects === "All") {
                display = true;
                break;
            };
        };

        project.display = display;
    });

    const projectItems = props.projects.map((project) =>
        <ProjectItem
            key = {project.name}
            name = {project.name}
            description = {project.description}
            link = {project.link}
            image_url = {project.image_url}
            technologies = {project.technologies}
            display = {project.display}
            displayProjects = {displayProjects}
            setDisplayProjects = {setDisplayProjects}
        >
        </ProjectItem>
    );

    return (
        <section id="Projects">
            <Container>
                <h2>Projects</h2>

                <AllTechnologies
                    allTechnologies = {allTechnologies}
                    displayProjects = {displayProjects}
                    setDisplayProjects = {setDisplayProjects}
                ></AllTechnologies>
                
                {projectItems}
            </Container>
        </section>
    );
};