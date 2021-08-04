import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillItem from './SkillItem';
import { handlingLineBreaks } from '../utils.js';

export default function About(props) {
    const about = props.about;
    let skillItems = props.about.skills;

    if (skillItems) {
        skillItems = skillItems
            .sort((prev, next) =>
                //1 push skill further down, -1 move skill up
                //lower skill level move down
                (prev.exp < next.exp) ? 1
                : (
                    //matching skill level sort alphabetically
                    (prev.exp === next.exp) ? (
                        (prev.name > next.name) ? 1 : -1
                    )
                    //high skill level move up
                    : -1
                )
            )
            .map(skill =>
                <SkillItem
                    key = {skill.name}
                    name = {skill.name}
                    exp = {skill.exp}
                >
                </SkillItem>
            );
    };

    const aboutContents = (
        <>
            {about.title ? <h2>{handlingLineBreaks(about.title)}</h2> : null}
            {about.description ? <p className="about-descr">{handlingLineBreaks(about.description)}</p> : null}
            
            {about.current_project ? 
                <div className="current-project">
                    <h4>Current Project:</h4>
                    <p>{handlingLineBreaks(about.current_project)}</p>
                </div>
                : null
            }
        </>
    );

    return (
        <section id="About">
            <Container>
                <Row>
                    {about.image_url ?
                        <> 
                            <Col lg={{span:6, order:2}} xl={4} className="about-img">
                                <img src={`/images/${about.image_url}`} alt={about.image_url}></img>
                            </Col>
                            <Col lg={{span:6, order:1}} xl={8}>
                                {aboutContents}
                            </Col>
                        </>
                        : 
                        <Col>
                            {aboutContents}
                        </Col>
                    }
                </Row>

                {skillItems ? 
                    <>
                        <h4>My Skills:</h4>
                        <Row className="skills">
                            {skillItems}
                        </Row>
                    </>
                    : null
                }
            </Container>
        </section>
    );
};