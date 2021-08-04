import ToggleButton from 'react-bootstrap/ToggleButton';

export default function TechButton(props) {
    function setTechButtons(event, name) {
        props.displayProjects === name ? props.setDisplayProjects("All") : props.setDisplayProjects(event.target.value);
    };

    return (
        <ToggleButton
            variant={props.variant}
            type="checkbox"
            value={props.name}
            checked={props.displayProjects === props.name}
            onChange={(e) => setTechButtons(e, props.name)}
        >
            {props.name}
        </ToggleButton>
    );
};