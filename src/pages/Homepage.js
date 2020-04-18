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
import tt from "../assets/images/tt5.png"
import art from "../assets/images/art.jpg"
import art2 from "../assets/images/art2.jpg"
import 'react-awesome-button/dist/themes/theme-blue.css';
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
} from 'react-awesome-button';

function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>

                    </Col>
                </Row>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>

                    </Col>
                </Row>
                <Row className="justify-content-center py-5">
                    <Info />
                </Row>
            </Container>
        </div>
    );
}
export default HomePage;
