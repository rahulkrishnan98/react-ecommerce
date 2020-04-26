import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "../components/Form";
import Table from 'react-bootstrap/Table';
import Options from "../components/Options"

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: ["Items", "   ", 'Cost'],
            items: ["Item1", "Item2"],
            placeHolder: ["100USD", "2000 USD"]

        }
    }
    render() {
        return (
            <Container >
                <Row>
                    <Col md='5'>
                        <pre><h3 className="lead font-weight-light" style={{ paddingLeft: "20px", paddingTop: "25px" }}> Cart Items</h3></pre>
                        <Table responsive>
                            {/* <thead>
                                {this.state.headers.map((value, index) => {
                                    return <th className="lead font-weight-light">{value}</th>
                                })}
                            </thead> */}
                            <tbody>
                                {this.state.items.map((value, index) => {
                                    return (<tr>
                                        <td>{this.state.items[index]}</td>
                                        <td>&nbsp;</td>
                                        <td>{this.state.placeHolder[index]}</td></tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <h3 className="lead font-weight-light">Total:</h3><p>3000USD</p>
                    </Col>
                    <Col md="7">
                        <Form header={"Payment Details"} margin={"10%"} paddingLeft={"15%"} />
                    </Col>

                </Row>
            </Container >

        );
    }

}
export default CartPage