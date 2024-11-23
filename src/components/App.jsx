import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import Footer from './Footer';
import Cart from './Cart';  
import MenuList from './MenuList';
import UserDetails from './UserDetails';


const App = () => {

    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [,setCartCount] = useState(0);
    
    const handleLogin = (username) => {
        setUser(username); // Set logged-in user
    };

    const handleRegister = (username) => {
        setUser(username);
    };

    const handleLogout = () => {
        setUser(null); // Clear logged-in user
        clearCart();
    };

    const WelcomeMessage = ({ user }) => {
        return user ? <h1>Welcome, {user}!</h1> : null;
    };


    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.name === item.name);
            if (existingItemIndex >= 0) {
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += 1; // Increment quantity
                return newItems;
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const updateCartItemQuantity = (index, quantity) => {
        setCartItems((prevItems) => {
            const newItems = [...prevItems];
            newItems[index].quantity = quantity;
            return newItems;
        });
    };

    const removeItem = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setCartItems([]);
        setCartCount(0);
    };

    return (
        <Router>
            <Header />

                <div className="cart-link">

                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <i className="fas fa-shopping-cart"></i>Cart {(
                                <span className="badge bg-danger ms-1">{cartItems.length}</span>
                            )}
                        </Link>
                    </li>

                </div>
            
            {/* Optionally, display a logout button in the header */}
            <div className="d-flex justify-content-end">
                    <Link to="/">
                        {user && <button className="btn btn-primary me-4" onClick={handleLogout}>Logout</button>}
                    </Link>
            </div>

            <WelcomeMessage user={user} /> {/* Display the welcome message */}

            <div className="containerpath mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menulist" element={<MenuList/>}/>
                    <Route path="/menu" element={user ? <Menu onOrder={addToCart} /> : <Login onLogin={handleLogin} />}/>
                    <Route path="/login" element={<Login onLogin={handleLogin} onLogout={handleLogout}/>} />
                    <Route path="/register" element={<Register onRegister={handleRegister} />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={user ? 
                            <Cart 
                            items={cartItems} 
                            updateCartItemQuantity={updateCartItemQuantity} 
                            removeItem={removeItem} 
                            /> : <Login onLogin={handleLogin} />}/>
                    <Route path="/user-details" element={
                        <UserDetails clearCart={clearCart} />   
                    } />
                </Routes>

            </div>

                <Footer />
        </Router> 
    );
};

export default App;

