import { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Welcome = (props) => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col><h1>Welcome Onboard {props.userName}!</h1></Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Welcome;