import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "../components/Form"

function CartPage(props) {
    return (
        <Container >
            <Row>
                <Col md='5'>
                    <pre><h3 className="lead font-weight-light" style={{ paddingLeft: "20px", paddingTop: "25px" }}> Cart Items</h3></pre>
                    <hr />
                    <h4 className="lead font-weight-light" style={{ align: "left", display: "inline" }}>Items</h4><h4 className="lead font-weight-light" style={{ marginLeft: "45%", align: "right", display: "inline" }}>Cost</h4>

                </Col>
                <Col md="7">
                    <Form header={"Payment Details"} margin={"10%"} paddingLeft={"15%"} />
                </Col>

            </Row>
        </Container>

    );
}
export default CartPage