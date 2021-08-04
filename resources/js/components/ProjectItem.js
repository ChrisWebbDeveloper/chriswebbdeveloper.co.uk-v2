import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TechButton from './TechButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { handlingLineBreaks } from '../utils.js';

export default function ProjectItem(props) {
    const technologies = props.technologies
        .sort((prev, next) =>
            //1 push skill further down, -1 move skill up
            (prev.position > next.position) ? 1 : -1
        )
        .map(technology =>
            <TechButton
                variant="secondary"
                key={technology.name}
                name={technology.name}
                displayProjects = {props.displayProjects}
                setDisplayProjects = {props.setDisplayProjects}
            >
            </TechButton>
        );

    const displayClass = (props.display) ? "" : "d-none";

    return (
        <Row className={`ProjectItem ${displayClass}`}>
            <Col md={6} lg={12} xl={6} className="project-img">
                {props.image_url ? <img src={`/images/${props.image_url}`} alt={props.image_url}></img> : <div></div>}
            </Col>
            <Col md={6} lg={12} xl={6} className="project-info">
                <h4>{props.name}</h4>
                <hr />
                {props.description ? <p className="project-descr">{handlingLineBreaks(props.description)}</p> : null}

                {props.link ? <Button variant="outline-primary" href={props.link} target='_blank'>Visit Site <FontAwesomeIcon icon={faMouse} /></Button> : null}

                {technologies ?
                    <>
                        <h6>Technologies Used:</h6>
                        <ButtonGroup className="TechButtons" toggle>
                            {technologies}
                        </ButtonGroup>
                    </>
                    : null
                }
            </Col>
        </Row>
    );
};