import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.state = { shown: false, display: 'none', close: '', anim: ''}
    }
    toggleMenu() {
        if (this.state.shown) {
            this.setState({ shown: false, display: 'none', close: ''})
            document.querySelector('body').style.overflowY='';
        } else {
            this.setState({ shown: true, display: 'block', close: ' close'});
            document.querySelector('body').style.overflowY='hidden';
        }
    }
    hideMenu(event){
       if(event.target.closest('a')){
        this.toggleMenu();
       } 
    }
    render() {
        return (
            <React.Fragment>
            <div className={"hamburger-container"+this.state.close} onClick={this.toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="menu-mobile" style={{display: this.state.display}}> 
                <div className={`menu-mobile-container animated slideInRight fast`}>
                    <ul onClick={this.hideMenu.bind(this)}>
                        <li><NavLink to='/lerestaurante'>HOME</NavLink></li>
                        <li><NavLink to='/lerestaurante/Prices'>PRIECE LIST</NavLink></li>
                        <li><NavLink to='/lerestaurante/Hours'>OPENING HOURS</NavLink></li>
                        <li><NavLink to='/lerestaurante/About'>ABOUT US</NavLink></li>
                        <li><NavLink to='/lerestaurante/Contacts'>CONTACTS</NavLink></li>
                    </ul>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Hamburger
