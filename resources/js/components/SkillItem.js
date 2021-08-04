import Col from 'react-bootstrap/Col';

export default function SkillItem(props) {
    return (
        <Col sm={6} className="SkillItem">
            <div>{props.name}</div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:`${props.exp}%`}} aria-valuenow={props.exp} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </Col>
    );
};