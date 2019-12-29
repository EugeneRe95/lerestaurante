import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationCard from './NavigationCard';
import Hamburger from './Hamburger';


export class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="logo"><i className="fas fa-concierge-bell"></i> LeRestaurante</div>
                <Hamburger />
                <nav>
                    <NavLink to='/lerestaurante'>HOME</NavLink>
                    <NavLink to='/lerestaurante/Prices'>PRIECE LIST</NavLink>
                    <NavLink to='/lerestaurante/Hours'>OPENING HOURS</NavLink>
                    <NavLink to='/lerestaurante/About'>ABOUT US</NavLink>
                    <NavLink to='/lerestaurante/Contacts'>CONTACTS</NavLink>
                </nav>
                <div id="nav-body">
                    <div>
                        <div className='darken'><NavigationCard header='FOR MEAT LOVERS' button='FULL MENU' link='/lerestaurante/Prices/Meat' /></div>
                    </div>
                    <div>
                        <div className='darken'><NavigationCard header='VEGETERIAN and VEGAN' button='FULL MENU'  link='/lerestaurante/Prices/Vegan' /></div>
                    </div>
                    <div>
                        <div className='darken'><NavigationCard header='BOOK A TABLE' button='TAKE ME THERE' link='/lerestaurante/Book' /></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation
