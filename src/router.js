import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login/Login.js";
import AddBook from "./components/addBook/AddBook.js";
import BookDetail from "./components/bookDetail/BookDetail.js";
import Bookshelf from "./components/bookshelf/Bookshelf";
import Browsing from "./components/browsing/Browsing.js";
import Cart from "./components/cart/Cart.js";
import Editbook from "./components/editBook/Editbook";


export default (
    <div>
        <Switch>
            <Route component={Login} exact path='/' />
            <Route component={AddBook} path='/AddBook' />
            <Route component={BookDetail} path='/BookDetail' />
            <Route component={Bookshelf} path='/Bookshelf' />
            <Route component={Browsing} path='/Browsing' />
            <Route component={Cart} path='/Cart' />
            <Route component={Editbook} path='/Editbook' />                    
        </Switch>
    </div>
)