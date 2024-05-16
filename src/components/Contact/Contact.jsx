import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section">
            <h2>Hire those who do the work</h2>
            <div className="contact-content">
                <div className="contact-logo">
                    <img src="../src/assets/Projetos/logopreta.png" alt="BWStation Logo" />
                </div>
                <div className="contact-info">
                    <p><b>Phone</b>: +1 305 921 4237</p>
                    <p><b>E-mail</b>: tiagocosta@bimworkstation.com</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
