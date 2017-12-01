import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login/Login.js";
import AddBook from "./components/addBook/AddBook.js";
import BookDetail from "./components/bookDetail/bookDetail.js";
import Bookshelf from "./components/bookshelf/Bookshelf";
import Browsing from "./components/browsing/Browsing.js";
import Cart from "./components/cart/Cart.js";
import Editbook from "./components/editBook/EditBook";


export default (
    <div>
        <Switch>
            <Route component={Landing} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={Class} path='/class' />
            <Route component={ClassWizard} path='/classwizard' />
            <Route component={Join} path='/join' />
            <Route component={Profile} path='/profile' />
            <Route component={SideNav} path='/side' />
            <Route component={MobileNav} path='/mobilenav' />
            <Route component={ClassModal} path="/classmodal"/>
            <Route component={Profile} path="/profile"/> 
            <Route component={AddAssignment} path="/test"/>                        
        </Switch>
    </div>
)