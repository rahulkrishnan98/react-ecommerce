import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Col from 'react-bootstrap/Col';
import Carousel from '../components/Carousel';
import Info from '../components/Info';
import helper from "../assets/images/ripoff1.png"
import rip2 from "../assets/images/rip2.png"
import rip1 from "../assets/images/rip1.png"
import kirtilals from "../assets/images/kirtilals.png"
import rip3 from "../assets/images/rip3.png"
import tr from "../assets/images/try.jpg"
import art from "../assets/images/art.jpg"
import art2 from "../assets/images/art2.jpg"
import 'react-awesome-button/dist/themes/theme-blue.css';
import {
    AwesomeButton,
} from 'react-awesome-button';

function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={{ span: 4 }} style={{ textAlign: "centre" }}>
                        <img style={{ width: "100%" }} src={helper} alt="design" />
                        <h3 className="lead font-weight-light" style={{ paddingLeft: "20px", paddingTop: "25px" }}> Designed to streamline your print needs</h3>
                        <p className="font-weight-light" style={{ margin: "15px", textAlign: "centre" }}>
                            We’ve prepared a guide for you to get your artwork print ready. Simply place your order and send your artwork for proof.
                            Your order will then be delivered within 4 to 5 days from sign off.
                            <AwesomeButton style={{ marginLeft: "35%", marginTop: "5%" }} type="secondary">Start Printing</AwesomeButton>
                            {' '}
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>

                    </Col>
                </Row>
                <Row className="justify-content-center py-5">
                    <Info
                        info_about={props.info_about}
                        info_printing={props.info_printing}
                        info_service={props.info_service}
                        info_support={props.info_support}
                    />
                </Row>
            </Container>
        </div>
    );
}
export default HomePage;

