import React from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'react-awesome-button/dist/themes/theme-blue.css';
import {
    AwesomeButton,
} from 'react-awesome-button';


const FormPage = (props) => {
    return (
        <Form style={{ margin: props.margin }}>
            <Form.Row>
                <Form.Group as={Col} controlId="fname" >
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="First Name" style={{ border: '0', borderBottom: '1px solid lightgray' }} />
                </Form.Group>

                <Form.Group as={Col} controlId="lname">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Last Name" style={{ border: '0', borderBottom: '1px solid lightgray' }} />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label></Form.Label>
                <Form.Control placeholder="Address" style={{ border: '0', borderBottom: '1px solid lightgray' }} />
            </Form.Group>

            <Form.Group controlId="delivery">
                <Form.Label></Form.Label>
                <Form.Control placeholder="Special Delivery Instructions" style={{ border: '0', borderBottom: '1px solid lightgray' }} />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control style={{ border: '0', borderBottom: '1px solid lightgray' }} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" value="Choose..." style={{ border: '0', borderBottom: '1px solid lightgray' }} >
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Gujarat</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control style={{ border: '0', borderBottom: '1px solid lightgray' }} />
                </Form.Group>
            </Form.Row>
            <AwesomeButton type="secondary">Proceed to Pay</AwesomeButton>
            {' '}
        </Form>
    );
};

export default FormPage;