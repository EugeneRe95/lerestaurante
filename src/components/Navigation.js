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
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/Prices'>PRIECE LIST</NavLink>
                    <NavLink to='/Hours'>OPENING HOURS</NavLink>
                    <NavLink to='/About'>ABOUT US</NavLink>
                    <NavLink to='/Contacts'>CONTACTS</NavLink>
                </nav>
                <div id="nav-body">
                    <div>
                        <div className='darken'><NavigationCard header='FOR MEAT LOVERS' button='FULL MENU' link='/Prices/Meat' /></div>
                    </div>
                    <div>
                        <div className='darken'><NavigationCard header='VEGETERIAN and VEGAN' button='FULL MENU'  link='/Prices/Vegan' /></div>
                    </div>
                    <div>
                        <div className='darken'><NavigationCard header='BOOK A TABLE' button='TAKE ME THERE' link='/Book' /></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation
