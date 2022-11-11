import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components/Navbar';
import { TranslateBox } from './components/TranslateBox';
import Additional from './components/Additional';
import Footer from './components/Footer';
import React, { useState } from 'react'


export default function App(){

    return (
        <>
            <Navbar />
            <TranslateBox/>
            <Additional/>
            <Footer/>
            <ToastContainer autoClose={3000} />
        </>
    );
};