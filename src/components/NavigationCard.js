import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class NavigationCard extends Component {
    render() {
        return (
            <div className="nav-card">
                <h1>{this.props.header}</h1>
                <NavLink to={this.props.link}>{this.props.button}</NavLink>
            </div>
        )
    }
}

export default NavigationCard
