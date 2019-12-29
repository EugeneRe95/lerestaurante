import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import pic1 from '../img/food-images/chiken.jpg';
import pic2 from '../img/food-images/meat.jpg';
import pic3 from '../img/food-images/pasta.jpg';
import pic4 from '../img/food-images/salad.jpg';
import pic5 from '../img/food-images/soup.jpg';
import pic6 from '../img/food-images/trout.jpg';

export class MyCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={true} showThumbs={false} dynamicHeight={false} infiniteLoop={true} width="35%" showIndicators={false} showStatus={false} autoPlay={true} stopOnHover={false} >
                <div>
                    <img src={pic1} alt="food"/>
                    <p className="legend">CHIKEN WITH POTATOES</p>
                </div>
                <div>
                    <img src={pic2} alt="food"/>
                    <p className="legend">RAW MEAT WITH BBQ</p>
                </div>
                <div>
                    <img src={pic3} alt="food"/>
                    <p className="legend">PASTA WITH TOMATO PUREE</p>
                </div>
                <div>
                    <img src={pic4} alt="food"/>
                    <p className="legend">SALAD WITH BEETROOT</p>
                </div>
                <div>
                    <img src={pic5} alt="food"/>
                    <p className="legend">MUSHROOM SOUP</p>
                </div>
                <div>
                    <img src={pic6} alt="food"/>
                    <p className="legend">FRESH TROUT</p>
                </div>
            </Carousel>
        )
    }
}

export default MyCarousel
