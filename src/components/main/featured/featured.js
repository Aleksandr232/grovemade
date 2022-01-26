import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mag from './magsafri.png';
import laptop from './laptop.png';
import ipad from './ipad.png';
import monitor from './monitor.png';
const Featured=()=>{
    return(
        <section className='featured'>
            <div className="container">
                    <div className="title_desing">Featured Products</div>
                    <div className="sub_title_desing">See What’s Trending Right Now</div>
                </div>
                <Carousel className='carousel'>
                    <Carousel.Item>
                        <img
                        className="walunt"
                        src={mag}
                        alt="First slide"
                        />
                        <div className='device'>Walnut MagSafe Stand</div>
                        <div className='price'>$120</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="walunt"
                        src={laptop}
                        alt="Second slide"
                        />
                        <div className='device'>Walnut Laptop Riser</div>
                        <div className='price'>$150</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="walunt"
                        src={ipad}
                        alt="Third slide"
                        />
                        <div className='device'>Walnut iPad Stand</div>
                        <div className='price'>$80</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="walunt"
                        src={monitor}
                        alt="Third slide"
                        />
                        <div className='device'>Walnut Monitor Stand</div>
                        <div className='price'>$100</div>
                    </Carousel.Item>
                </Carousel>
        </section>
    )
}

export default Featured;