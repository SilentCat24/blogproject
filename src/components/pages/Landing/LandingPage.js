import React from 'react';
import pizzaImage from "../../media/Rectangle 400.svg";
import vehicleImage from "../../media/Screenshot_669 1.png";
import './Landing.scss';

export const LandingPage = () => {

    return (
        <div className='section'>     
            <div className='header'>
                <div>
                    <img src={vehicleImage} alt="no image" className='header-img'
                    />
                </div>
                <div>
                    <div ><span className='header-title' style={{
                       
                    }}>Discover The <br/><span style={{ color: "red" }}>Best</span>
                        Food <br/> And Drinks</span></div>
                </div>
                <div >
                    <p className='header-para'>Naturally made Healthcare Products for the better care & support of your body.</p>
                </div>

                <div>
                    <button className='header-button'><span className='button-span'>Explore Now! </span></button>
                </div>

               
            </div>
            <div className='outerimage'>
                    <div className='innerimage'>
                        <img src={pizzaImage} alt="no pizza image"  className='pizza-img'/>
                    </div>

                </div>  



        </div>

    )
}
