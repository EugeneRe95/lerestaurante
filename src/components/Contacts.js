import React from 'react'

function Contacts() {
    return (
        <div id="contacts">
            <div id="contacts-container" className="animated fadeInUp">
                <h1>Contact us</h1>
                <p>T: +33-655-5357-86</p>
                <p>General Enquiries: info@lerestaurant.com</p>
                <p>Reservations: reservations@lerestaurant.com</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/LoulouParisrestaurant/"  target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/loulourestaurant/?hl=ru"  target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" ></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contacts
