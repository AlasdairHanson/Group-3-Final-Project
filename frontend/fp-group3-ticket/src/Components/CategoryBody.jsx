import React from 'react';
import { Button } from 'react-bootstrap';
const CategoryBody = ({body}) => {
return(  
    <Button variant="primary" block className="catButton font-weight-bold">{body}</Button> 
);
}
export default CategoryBody;