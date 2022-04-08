import React, {useState} from 'react';
import './App.css';
import ReceivingOption from "./Components/ReceivingOption";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/main/MainContent";

function App() {
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    return (
        <div className='container'>
            <Header address={{street, house }}/>
            <ReceivingOption address={{street, setStreet, house, setHouse}}/>
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
