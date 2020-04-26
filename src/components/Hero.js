import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import {
    AwesomeButton,
} from 'react-awesome-button';
function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {/* {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>} */}
                        {/* {props.text && <h3 className="lead font-weight-light">{props.text}</h3>} */}
                        <h3 className="lead font-weight-light">From business cards, letterheads and compliment slips to flyers,<br></br> posters
                        and roller banners, all prices include delivery to mainland India*
                        </h3>
                        <AwesomeButton type="secondary">Start Printing</AwesomeButton>
                        {' '}
                    </Col>
                </Row>
            </Container>
        </Jumbotron >
    );
}
export default Hero;
