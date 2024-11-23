import React from 'react'; 
import { Link } from 'react-router-dom';

const Cart = ({ items, updateCartItemQuantity, removeItem }) => {
    const totalQty = items.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalTax = totalAmount * 0.09;
    const totalAmtTax = totalAmount + totalTax;

    return (
        <div className="menu-container">
            <h2>Bill to Pay</h2>
            <h4>Order List</h4>
            {items.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div className="category">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td className="item-description">{item.description}</td>
                                    <td className="item-quantity">
                                        <button onClick={() => updateCartItemQuantity(index, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                        {item.quantity}
                                        <button onClick={() => updateCartItemQuantity(index, item.quantity + 1)}>+</button>
                                    </td>
                                    <td className="item-price">S${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => removeItem(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <table className="cart-total">
                        <tbody>
                            <tr><td><h6>Total Quantity: {totalQty}</h6></td></tr>
                            <tr><td><h6>Total Amount: S${totalAmount.toFixed(2)}</h6></td></tr>
                            <tr><td><h6>Total Tax: S${totalTax.toFixed(2)}</h6></td></tr>
                            <tr><td><h6>Total Amount with Tax: S${totalAmtTax.toFixed(2)}</h6></td></tr>
                        </tbody>
                    </table>
                    <br />
                    
                    <div className="d-flex justify-content-end">
                        <Link to="/user-details">
                            <button className="btn btn-primary me-2">Proceed to Order</button>
                        </Link>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Cart;
