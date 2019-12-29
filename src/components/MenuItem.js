import React, { Component } from 'react'

export class MenuItem extends Component {
    render() {
        return (
            <div className="dish animated fadeInUp">
                <div className="dish-icon" style={{background: `url(`+this.props.image+`) no-repeat center center /cover`}}></div>
                <div className="dish-description">
                    <p>{this.props.dish}........ <span>{this.props.price}</span></p>
                    <p style={{color: '#c2c2c2'}}>{this.props.alergens}</p>
                </div>
            </div>
        )
    }
}

export default MenuItem

