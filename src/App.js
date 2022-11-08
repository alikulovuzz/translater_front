import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components/Navbar';
import { TranslateBox } from './components/TranslateBox';
import Additional from './components/Additional';
import Footer from './components/Footer';
import React, { useState } from 'react'
// import RecordView from './components/RecordView';


export default function App(){

    const [languages, setLanguages] = useState({
        from: 1,
        to: 2
    })

    return (
        <>
            <Navbar />
            <TranslateBox changeLanguage={setLanguages}/>
            {/* <RecordView/> */}
            <Additional languages={languages}/>
            <Footer/>
            <ToastContainer autoClose={3000} />
        </>
    );
};