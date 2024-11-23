import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [contact, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [agree, setAgree] = useState(false); // State for the checkbox

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., sending to an API
        console.log('Form submitted:', { name, email, message });
        console.log('Agree to promotional materials:', agree);
        
        // Clear form fields
        setName('');
        setContactNo('');
        setEmail('');
        setMessage('');
        alert('Thank you for contacting us and sharing your feedback!');
    };

    return (
        
        <div className="contact-us-container">
            <div className="map-container">
                <div>
                    <h2>Our Location Map</h2>
                    <div>
                        <iframe
                            title="Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091746!2d144.9537353153173!3d-37.81627997975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f5c7d37%3A0x5045675218cee50!2sSankranti!5e0!3m2!1sen!2sau!4v1611266531832!5m2!1sen!2sau"
                            width="580"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            alt="Google Map service is currently not reachable."
                        ></iframe>
                    </div>
                </div>        
            </div>
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p><strong>Mobile No:</strong> +65-12345678</p>
                <p><strong>Email:</strong> email@shakthirestr.com</p>
                <p><strong>Address:</strong> 123 Shakthi Street, Singapore</p>
                <p><strong>Operating Hours:</strong> Opens 24 Hours Daily</p>
            </div>
            <div className="contact-form">
                <h2>Feedback Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                    <label htmlFor="contact">Contact No:</label>
                    <br></br>
                    <input
                        type="number" 
                        id="contact"
                        value={contact} 
                        onChange={(e) => setContactNo(e.target.value)} 
                        required
                    />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                            />
                            &nbsp;By checking this box, I am agreeable to receiving promotional materials by Sankranti and its brands.
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
      </div>  
    );
};

export default ContactUs;