import React from 'react';
import ReactDOM from "react-dom";
import { Col, Row, Form } from "react-bootstrap";
const SearchBar = () => {
return( 
    <Form.Group>
        <Form.Control type="text" placeholder="Normal text" />
    </Form.Group>
);
}
export default SearchBar;