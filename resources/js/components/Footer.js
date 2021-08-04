import Container from 'react-bootstrap/Container';

export default function Footer() {
    const appName = process.env.MIX_APP_NAME;
    const appNameDisplay = appName ? `${appName} ` : null;

    const currentYr = new Date().getFullYear();
    const copyYr = currentYr === 2021 ? '2021' : `2021-${currentYr}`;

    const env = process.env.MIX_APP_ENV;
    const version = process.env.MIX_APP_VERSION;

    return (
        <footer id="Footer">
            <Container>
                <div className="float-left">
                    {appNameDisplay} &copy; {copyYr}
                </div>
                <div className="float-right">
                    {(env !== 'production' && version) ? `${env.toUpperCase()} ${version}` : null}
                </div>
                <div className="clear-fix"></div>
            </Container>
        </footer>
    );
};