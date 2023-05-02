/* eslint-disable no-unused-vars */
import React from 'react';
import Nav from '../page/shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../page/shared/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;