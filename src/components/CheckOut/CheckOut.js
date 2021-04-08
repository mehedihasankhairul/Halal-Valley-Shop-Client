import React from 'react';

const CheckOut = () => {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    const [book ,setBook] = useState({})
  console.log(book);
  
     const {id} = useParams()
     useEffect(() => {
      fetch(http://localhost:5000/checkout/${id})
      .then(res => res.json())
      .then(data =>setBook(data))
  }, [id])
  const history = useHistory()
  const handleCheckOut=()=>{
          fetch(http://localhost:5000/addorder/ , {
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({ 
                  name:book.name ,
                  price:book.price,
                  author:book.author ,
                  username:loggedInUser.name,
                  email:loggedInUser.email
              })
          })
          .then(()=>{
             history.push('/order')
              const newloggedInUser = {...loggedInUser , orderDate: new Date()}
              setLoggedInUser(newloggedInUser)
              console.log(newloggedInUser)
             
          })

  
    return (
        <div className="main p-4">
        <h2 className="text-danger text-center">Checkout Order</h2>   
      <h4>Hello  {loggedInUser.name}</h4>
      <h4 className="text-center">Your Order Summery</h4>
      <p className="text-primary ">book name {book.name}</p>
       <h5> Author Name:{author}</h5>
       <h5>Quantity : 1</h5>
    <button className="btn btn-success"onClick={handleCheckOut}>checkout</button> 
        </div>
    );
};

export default CheckOut;