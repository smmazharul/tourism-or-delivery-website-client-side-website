import React from 'react';
import { Image } from 'react-bootstrap';
import '../css/Banner.css'
import banner from'../Img/Banner/banner.png'


const Banner = () => {
    return (
        <div className='banner mb-5'>
            
            <div className="container ">
                <Image src={banner} fluid />
                {/* <div className="centered"><h2>Welcome To  Aahar <br />food Delivery</h2></div> */}
            </div>
        </div>
    );
};

export default Banner;