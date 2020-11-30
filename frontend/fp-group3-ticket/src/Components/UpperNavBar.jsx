import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import UpperNavButtons from './UpperNavButtons';
import { Form } from 'react-bootstrap';
const UpperNavBar = () => {
return(  
    <Container fluid>
        <Row>
            <Col xs={3}>
                <h2>QA LOGO HERE</h2>
            </Col>
            <Col xs={4}>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                    </Form.Row>
                </Form>
            </Col>
            <Col>
                <UpperNavButtons/>
            </Col>
        </Row>
    </Container>  
);
}
export default UpperNavBar;