import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section">
            <h2>Hire those who do the work</h2>
            <div className="contact-content">
                <div className="contact-logo">
                    <img src="/logo.png" alt="BWStation Logo" />
                </div>
                <div className="contact-info">
                    <h3>Tiago Costa</h3>
                    <p>Director</p>
                    <p>+1 305 921 4237</p>
                    <p><a href="mailto:tiagocosta@bimworkstation.com">tiagocosta@bimworkstation.com</a></p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
