import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

// Input - [headers],[quantities],[single-sided],[double-sided]
function Options(props) {
    return (
        <Table responsive>
            <thead>
                {props.headers.map((value, index) => {
                    return <th>{value}</th>
                })}
            </thead>
            <tbody>
                {props.quantity.map((value, index) => {
                    return (<tr>
                        <td>{props.quantity[index]}</td>
                        <td>&nbsp; <Button style={{ width: "16px" }} variant="outlined" color="primary">{props.single[index]}</Button></td>
                        <td><Button style={{ width: "16px" }} variant="outlined" color="primary">{props.double[index]}</Button></td></tr>
                    );
                })}
            </tbody>

        </Table>
    );
}
export default Options;