import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import UpperNavButtons from './UpperNavButtons';
const UpperNavBar = () => {
return(  
    <Container fluid="true">
        <Row>
            <Col xs={3}>
                <h2>QA LOGO HERE</h2>
            </Col>
            <Col xs={4}>
                <SearchBar/>
            </Col>
            <Col>
                <UpperNavButtons/>
            </Col>
        </Row>
    </Container>  
);
}
export default UpperNavBar;