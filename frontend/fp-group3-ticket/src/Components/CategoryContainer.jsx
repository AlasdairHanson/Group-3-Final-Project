import React from 'react';
import { Col } from 'react-bootstrap';
import CategoryBody from './CategoryBody';
import CategoryHead from './CategoryHead';
const CategoryContainer = () => {
return(  
    <Col className="catContainer">
        <CategoryHead/>
        <CategoryBody/>
    </Col>
);
}
export default CategoryContainer;