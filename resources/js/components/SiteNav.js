import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Scrollspy from 'react-scrollspy';
import Logo from '../../../public/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSmile, faHammer, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function SiteNav() {

    function clearActive(elem) {
        const navLinks = document.getElementsByClassName('nav-link');
        
        Array.from(navLinks).forEach(function(navLink) {
            const navLinkHref = navLink.getAttribute('href').substring(1);
            if (elem && navLinkHref !== elem.id) navLink.classList.remove('active');
        });
    };

    return (
        <Navbar expand="lg" bg="primary" id="SiteNav">
            <Navbar.Brand href="/">
                <div className="d-none d-lg-inline">
                    <img
                        alt=""
                        src={Logo}
                    />
                    <br />
                </div>
                <span>Chris Webb Developer</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-content" />
            <Navbar.Collapse id="navbar-content">
                <Nav defaultActiveKey="#Home">
                    <Scrollspy items={ ['Home', 'About', 'Projects', 'Contact'] } className="Scrollspy" currentClassName="active" offset={-400} componentTag={'div'} onUpdate={clearActive}>
                        <Nav.Link href="#Home">Home <FontAwesomeIcon className="site-nav-icon" icon={faHome} /></Nav.Link>
                        <Nav.Link href="#About">About <FontAwesomeIcon className="site-nav-icon" icon={faSmile} /></Nav.Link>
                        <Nav.Link href="#Projects">Projects <FontAwesomeIcon className="site-nav-icon" icon={faHammer} /></Nav.Link>
                        <Nav.Link href="#Contact">Contact <FontAwesomeIcon className="site-nav-icon" icon={faPhone} /></Nav.Link>
                    </Scrollspy>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};