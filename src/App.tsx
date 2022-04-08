import React from 'react';
import './App.css';
import CategoriesList from "./Components/CategoriesList";
import CategoriesNavList from "./Components/CategoriesNavList";
import ReceivingOption from "./Components/ReceivingOption";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='container'>
        <Header />
        <ReceivingOption />
        <CategoriesNavList />
        <CategoriesList />
        <Footer />
    </div>
  );
}

export default App;
