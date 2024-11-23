import React from 'react';

const MenuList = () => {
    const menuData = [
        {
            category: "STARTERS",
            items: [
                { name: "Veg 65", description: "Spicy fried vegetable dish", image: "images/gobi-65.jpg", price: 15 },
                { name: "Paneer 65", description: "Fried paneer cubes with spices", image: "images/paneer65.jpg", price: 12 },
                { name: "Potato Wedges", description: "Crispy potato wedges", image: "images/Wedges.jpg", price: 8 },
                { name: "Chicken Nuggets", description: "Breaded chicken pieces", image: "images/chickennuggets.jpg", price: 10 },
            ],
        },
        {
            category: "SOUPS",
            items: [
                { name: "Veg Clear Soup", description: "Light vegetable soup", image: "images/Veg-Soup.jpg", price: 6 },
                { name: "Chicken Soup", description: "Rich chicken broth", image: "images/chicken-soup.jpg", price: 10 },
                { name: "Tomato Soup with Basil", description: "Creamy tomato soup with basil", image: "images/Tomato-Basil-Soup.jpg", price: 8 },
            ],
        },

        {
            category: "LUNCH MENU",
            items: [
                {
                    name: "Chicken Sandwich",
                    description: "Delicious chicken sandwich with fresh veggies.",
                    image: "images/chicken-sandwich.jpg",
                    price: 25,
                },
                {
                    name: "Butter Chicken",
                    description: "Rich and creamy butter chicken curry.",
                    image: "images/chicken-butter.jpg",
                    price: 30,
                },
                {
                    name: "Aloo Lakhnawi",
                    description: "Spiced potato dish from Lucknow.",
                    image: "images/DumAloo.jpg",
                    price: 10,
                },
                {
                    name: "Keema Briyani",
                    description: "Flavorful minced meat briyani.",
                    image: "images/Keema Briyani.jpg",
                    price: 30,
                },
                {
                    name: "Shahi Egg Curry",
                    description: "Eggs in a rich and aromatic curry.",
                    image: "images/ShahiEggCurry.jpg",
                    price: 10,
                },
            ],
        },
        {
            category: "DESSERT",
            items: [
                {
                    name: "Ice Cream",
                    description: "Creamy vanilla ice cream.",
                    image: "images/Vanilla-Icecream.jpg",
                    price: 5,
                },
                {
                    name: "Brownie with Ice Cream",
                    description: "Warm brownie served with vanilla ice cream.",
                    image: "images/Brownie.jpg",
                    price: 10,
                },
                {
                    name: "Cheese Cake",
                    description: "Classic cheese cake with a graham cracker crust.",
                    image: "images/Cheesecake.jpg",
                    price: 5.50,
                },
                {
                    name: "Cup Cakes",
                    description: "Delicious vanilla and chocolate cupcakes.",
                    image: "images/cupcakes.jpg",
                    price: 3.50,
                },
            ],
        },
        
       
    ];


    return (
        <div className="menu-container">
            <h2>Menu</h2>
            {menuData.map((category, index) => (
                <div key={index} className="category">
                    <h3>{category.category}</h3>
                    <ul>
                        {category.items.map((item, idx) => (
                            <li key={idx} className="menu-item">
                                    <img src={item.image} alt={item.name} className="menu-image" />
                                <div className="item-details">
                                    <strong className="item-name">{item.name}</strong>
                                    <span className="item-description">{item.description}</span>
                                    <span className="item-price">S${item.price}</span>
                                   
                                </div>    
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default MenuList;

