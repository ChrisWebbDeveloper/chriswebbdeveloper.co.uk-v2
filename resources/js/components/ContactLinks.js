import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ContactLinks(props) {
    const links = props.links;

    return (
        <div id="ContactLinks">
            {links.email ? <a href={`mailto:${links.email}`}><FontAwesomeIcon icon={faEnvelope} /></a> : null}
            {links.facebook ? <a href={`https://facebook.com/${links.facebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a> : null}
            {links.twitter ? <a href={`https://twitter.com/${links.twitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a> : null}
            {links.instagram ? <a href={`https://instagram.com/${links.instagram}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a> : null}
            {links.linkedin ? <a href={`https://linkedin.com/in/${links.linkedin}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a> : null}
            {links.github ? <a href={`https://github.com/${links.github}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a> : null}
        </div>
    );
};