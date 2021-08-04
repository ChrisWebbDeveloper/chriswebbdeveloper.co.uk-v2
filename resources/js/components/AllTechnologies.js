import TechButton from './TechButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function AllTechnologies(props) {
    let allTechnologies = props.allTechnologies
        .sort((prev, next) => 
            //1 push skill further down, -1 move skill up
            (prev > next) ? 1 : -1
        );

    if (!allTechnologies.includes("All")) allTechnologies.unshift("All");

    allTechnologies = allTechnologies.map(name =>
            <TechButton
                variant="outline-secondary"
                key={name}
                name={name}
                displayProjects = {props.displayProjects}
                setDisplayProjects = {props.setDisplayProjects}
            >
            </TechButton>
        );

    return (
        <ButtonGroup id="AllTechnologies" className="TechButtons" toggle>
            {allTechnologies}
        </ButtonGroup>
    );
};