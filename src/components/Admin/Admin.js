import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProducts from '../AddProduct/AddProduct';

import ManageProducts from '../ManageProduct/ManageProducts';

const Admin = () => {
    return (
        <Router>
            <div className="container">
                <ul className="flat-left">
                    <li className="btn btn-outline-success m-1"><Link to="/manageProduct">Manage Product</Link></li>
                    <li className="btn btn-outline-success m-1"><Link to="/addProducts">Add Product</Link></li>
                    <li className="btn btn-outline-success m-1"><Link to="/">Edit Product</Link></li>
                </ul>
            </div><br /><br />
            <Switch>
                <Route path="/manageProduct">
                <ManageProducts/>
                </Route>
                <Route path="/addProducts">
                <AddProducts/>
     
                </Route>
            </Switch>
        </Router>
    );
};

export default Admin;