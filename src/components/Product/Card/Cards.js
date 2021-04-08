import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Product.css'

const Cards = ({product}) => {
    // const Products = ({ product }) => {
    //     console.log(imageURL)
        console.log(product.imageURL);
        return (

            <div className="">
                <Card style={{ width: '18rem', height: '450px' }}>
                    <Card.Img variant="top" src={product.imageURL} />
                    <Card.Body>
                        <Card.Title>{product.name} - {product.wight}</Card.Title>
                        <Card.Body className="row">
                            <Card.Text className="col-md-6 text-success"><h2>{product.price}</h2></Card.Text>
                            <Button className="col-md-6 size" variant="success"><Link to={"/checkout/" + product._id}>Buy Now</Link> </Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>

        );
    };

    export default Cards;