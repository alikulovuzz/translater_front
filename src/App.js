import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components/Navbar';
import { TranslateBox } from './components/TranslateBox';
import Additional from './components/Additional';
import Footer from './components/Footer';
// import RecordView from './components/RecordView';


export default function App(){

    return (
        <>
            <Navbar />
            <TranslateBox />
            {/* <RecordView/> */}
            <Additional/>
            <Footer/>
            <ToastContainer autoClose={3000} />
        </>
    );
};