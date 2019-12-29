import React, { Component } from 'react';
import MenuItem from './MenuItem';

import i1 from '../img/food-icon/1.png';
import i5 from '../img/food-icon/5.png';

export class PricesMeat extends Component {
    render() {
        return (
            <div id="prices">
                <div id="prices-container">
                    <h1 style={{ color: '#f1ac11' }}>DAILY MENU</h1>
                    <p style={{ margin: '20px' }}>MEAT MENU ONLY</p>
                    <div id="menu-list">
                        <MenuItem dish="RAW MEAT WITH BBQ" price="10$" alergens="Alergens..................4, 8, 12" image={i1} />
                        <MenuItem dish="CHIKEN WITH POTATOES" price="18$" alergens="Alergens..................4, 8, 17" image={i5} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PricesMeat
