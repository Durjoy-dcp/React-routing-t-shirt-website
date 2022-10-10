import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ "margin-top": "80px" }}></div>
            <Outlet ></Outlet>

        </div>
    );
};

export default Main;