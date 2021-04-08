import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [product, setProduct] = useState({})
    console.log(product);

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://evening-fjord-37236.herokuapp.com/checkout/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const history = useHistory()
    const handleCheckOut = () => {
        fetch('https://evening-fjord-37236.herokuapp.com/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: product.name,
                price: product.price,
                username: loggedInUser.name,
                email: loggedInUser.email
            })
        })
            .then(() => {
                history.push('/product')
                const newloggedInUser = { ...loggedInUser, orderDate: new Date() }
                setLoggedInUser(newloggedInUser)
                console.log(newloggedInUser)
            })
    }

    return (
        <div className="main p-4 display-content-center">
            <h2 className="text-danger text-center">Checkout Order</h2>
            <h4>Hello  {loggedInUser.name}</h4>
            <h2 className="text-center">Your Order Summery</h2>
            <h1 className="text-primary ">Product name: {product.name}</h1>
            <h5>Quantity : 1 </h5>
            <button className="btn btn-success" onClick={handleCheckOut}>CheckOut</button>
        </div>
    );
};
export default CheckOut;