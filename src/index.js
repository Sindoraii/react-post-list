import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate} from "react-router-dom";
import {AppRouter} from "./components/AppRouter/AppRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <AppRouter/>
    </BrowserRouter>

);
