import React from 'react';
import './App.css';
import CategoriesList from "./Components/CategoriesList";
import CategoriesNavList from "./Components/CategoriesNavList";
import DeliveryOption from "./Components/DeliveryOption";
import Header from "./Components/Header";

function App() {
  return (
    <div className='container'>
        <Header />
        <DeliveryOption />
        <CategoriesNavList />
        <CategoriesList />
    </div>
  );
}

export default App;
