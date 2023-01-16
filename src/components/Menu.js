import React from 'react';

const menuItems = [
    { name: "Spaghetti", price: "$12.99", img: "https://via.placeholder.com/150" },
    { name: "Lasagna", price: "$15.99", img: "https://via.placeholder.com/150" },
    { name: "Pizza", price: "$14.99", img: "https://via.placeholder.com/150" },
    { name: "Taco Salad", price: "$11.99", img: "https://via.placeholder.com/150" },
    { name: "Sushi Platter", price: "$19.99", img: "https://via.placeholder.com/150" }
];

const Menu = () => (
  <section className="menu">
    <h2 className="menu__title">Our Menu</h2>
    <div className="menu__items">
      {menuItems.map(item => (
        <div key={item.name} className="menu__item-card">
            <img src={item.img} alt={item.name} className="menu__item-img" />
            <h3 className="menu__item-name">{item.name}</h3>
            <p className="menu__item-price">{item.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;