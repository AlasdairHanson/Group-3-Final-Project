import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryBody from './CategoryBody';
import CategoryHead from './CategoryHead';
const CategoryContainer = () => {
return(  
    <Container className="catContainer">
        <CategoryHead body="Title1"/>
        <CategoryBody body="Body Text1"/>
        <CategoryBody body="Body Text1"/>
    </Container>
    
);
}
export default CategoryContainer;