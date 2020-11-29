import React from 'react';
import { Col } from 'react-bootstrap';
import CategoryBody from './CategoryBody';
import CategoryHead from './CategoryHead';
const CategoryContainer = () => {
return(  
    <Col className="catContainer">
        <CategoryHead body="Title1"/>
        <CategoryBody body="Body Text1"/>
        <CategoryBody body="Body Text1"/>
    </Col>
);
}
export default CategoryContainer;