import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css'


const AddProduct = () => {
    // const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const eventData = {
            name : data.name,
            wight: data.wight,
            price: data.price,
            imageURL : imageURL,
        }
        const URL = 'http://localhost:5055/addProduct'
        console.log(eventData)
        fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res =>console.log('server site res', res))
    }

    const imageUpdate = event => {
        console.log(event.target.files[0]);
        const imgData = new FormData()
        imgData.set('key', 'c9a680bd68e9169b11455b0458fac2a6');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <Container>
  
        <form className="form pl-4" onSubmit={handleSubmit(onSubmit)}><br />

        <input name="name" placeholder="Enter Name" {...register("name")} />

        <input name="wight" placeholder="Enter Wight" {...register("wight")} />
        <br />
        <input name="price" placeholder="Enter Price" {...register("price")} />

        <input name="image" type="file" onChange={imageUpdate} />
        <br />
        <input type="submit" /><br /><br />
    </form>
    </Container>
    );
};

export default AddProduct;