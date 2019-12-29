import React, { Component } from 'react';
import MenuItem from './MenuItem';

import i2 from '../img/food-icon/2.png';
import i3 from '../img/food-icon/3.png';
import i4 from '../img/food-icon/4.png';
import i6 from '../img/food-icon/6.png';

export class PricesVegan extends Component {
    render() {
        return (
            <div id="prices">
                <div id="prices-container">
                    <h1 style={{color:'#f1ac11'}}>DAILY MENU</h1>
                    <p style={{ margin: '20px' }}>VEGAN MENU ONLY</p>
                    <div id="menu-list">
                        <MenuItem dish="FRESH TROUT" price="13$" alergens="Alergens..................4, 9" image={i2} />
                        <MenuItem dish="SALAD WITH BEETROOT" price="6$" alergens="Alergens..................NONE" image={i3} />
                        <MenuItem dish="PASTA WITH TOMATO PUREE" price="12$" alergens="Alergens..................2, 6" image={i4} />
                        <MenuItem dish="MUSHROOM SOUP" price="9$" alergens="Alergens..................1, 3, 11" image={i6} />
                    </div>
                </div>
            </div>
        )
        
    }
}

export default PricesVegan
