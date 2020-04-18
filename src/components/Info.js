import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import logo from '../assets/images/logo.png'
function Info(props) {
    return (
        <Container fluid={true}>
            <div class="row">
                <div class="col-sm-3">
                    <img src={logo} alt="Logo" style={{ height: "200px", width: "200px", align: 'top' }} />
                </div>
                <div class="col-sm-2">
                    <h3 className="lead font-weight-bolder">
                        Printing
                    </h3>
                    <p>
                        <p>&nbsp;</p>
                        {props.info_printing.map((value, index) => {
                            return <p style={{ lineHeight: "15px" }}>{value}</p>
                        })}
                    </p>
                </div>
                <div class="col-sm-2">
                    <h3 className="lead font-weight-bolder">
                        Support
                    </h3>
                    <p>
                        <p>&nbsp;</p>
                        {props.info_support.map((value, index) => {
                            return <p style={{ lineHeight: "15px" }}>{value}</p>
                        })}
                    </p>
                </div>
                <div class="col-sm-2">
                    <h3 className="lead font-weight-bolder">
                        About
                    </h3>
                    <p>
                        <p>&nbsp;</p>
                        {props.info_about.map((value, index) => {
                            return <p style={{ lineHeight: "15px" }}>{value}</p>
                        })}
                    </p>
                </div>
                <div class="col-sm-2">
                    <h3 className="lead font-weight-bolder">
                        Looking for discounts?
                    </h3>
                    {/* <p>&nbsp;</p> */}
                    <p>{props.info_newsletter}</p>
                    <InputGroup size='sm'>
                        <FormControl
                            placeholder="Email"
                            aria-label="email-address"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary"><h7>Subcribe</h7></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        </Container >
    );
}
export default Info;