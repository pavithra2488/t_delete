import React, { useState } from 'react';

const UserDetails = ({ clearCart }) => {
    const [deliveryOption, setDeliveryOption] = useState('takeaway'); // Default option
    const [dateTime, setDateTime] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
   
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("Your order is successfully placed.");
        clearCart();
        setDeliveryOption('takeaway');
        setDateTime(''); 
        setEmail('');
        setPhone('');
        setAddress('');
    };

    return (
        <div className="contact-form">
             {successMessage && <h4 style={{ color: 'blue'}}>{successMessage}</h4>} {/* Display success message */}
            <h2>User Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Delivery Option:</label>
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="takeaway" 
                                checked={deliveryOption === 'takeaway'} 
                                onChange={(e) => setDeliveryOption(e.target.value)} 
                            />
                            &nbsp; Take Away &nbsp;
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="homedelivery" 
                                checked={deliveryOption === 'homedelivery'} 
                                onChange={(e) => setDeliveryOption(e.target.value)} 
                            />
                            &nbsp; Home Delivery
                        </label>
                    </div>
                </div>
                <div>
                    <label>Date & Time:</label>
                    <br></br>
                    <input 
                        type="datetime-local" 
                        value={dateTime} 
                        onChange={(e) => setDateTime(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Phone:</label><br></br>
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
           
        </div>
    );
};

export default UserDetails;
