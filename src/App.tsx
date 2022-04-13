import React, {useState} from 'react';
import './App.css';
import HeadContent from "./Components/head/HeadContent";
import Footer from "./Components/Footer";
import MainContent from "./Components/main/MainContent";

function App() {
    return (
        <div className='container'>
            <HeadContent />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
