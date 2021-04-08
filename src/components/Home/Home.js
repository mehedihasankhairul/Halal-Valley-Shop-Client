import React, { useEffect, useState } from 'react';
// import Products from './Product';
import './Home.css'
import Cards from '../Product/Card/Cards';
import { CircularProgress } from '@material-ui/core';


const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/Product')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])
    return (
            <div className="container">
            
                <div className='body col-md-3'>
                {
                    product.length === 0 && <CircularProgress color="Primary" />
                }
                    {
                        product.map(product => <Cards product={product}></Cards>)
                    }
                </div>
            </div>
    );
};

export default Home;