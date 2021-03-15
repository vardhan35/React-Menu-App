import './App.css';
import React from 'react'
import Menu from './Menu'
import items from './Data'
import Categories from './Categories'
import { useState } from 'react';
import Header from './Header'


const allCategories =['All', ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filteritems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }else{
      const newItems = items.filter((items) => items.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <div className="app">
      <Header/>
      <Categories categories={categories} filteritems={filteritems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
