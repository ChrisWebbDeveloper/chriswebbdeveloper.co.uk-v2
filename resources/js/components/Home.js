import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <section id="Home">
            <Container>
                <h1 className="display-1">
                    Hi, I'm
                    <br />
                    <span className="text-primary text-break">
                        Chris Webb
                    </span>
                </h1>

                <h5>I am a full-stack developer, dedicating to creating applications</h5>
                
                <Button variant="outline-primary" href="#Projects">See my work</Button>
            </Container>
        </section>
    );
};