import Container from 'react-bootstrap/Container';
import ContactLinks from './ContactLinks';
import ContactForm from './ContactForm';
import { handlingLineBreaks } from '../utils.js';

export default function Contact(props) {
    const contact = props.contact;

    return (
        <section id="Contact">
            <Container>
                <h2>Contact</h2>
                {contact.description ? <p>{handlingLineBreaks(contact.description)}</p> : null}
                {contact.links ? <ContactLinks links={contact.links} /> : null}
                {contact.include_form ? <ContactForm /> : null}
            </Container>
        </section>
    );
};