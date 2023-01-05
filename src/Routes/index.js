import App  from "./../App";
import React from "react";
import Details from "../Pages/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const MyRoute = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path='/details/:id' element={<Details/>}/>
            </Routes>
        </Router>
    );
};

export default MyRoute;