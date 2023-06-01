import React from 'react';
import "./Footer.scss";
import truck from '../../media/truck.jpg';
import Insta from '../../media/Insta.jpg';
import twit from '../../media/twit.jpg';
import facebook from '../../media/facebook.jpg';


const Footer = () => {
  return (
    <div className='Footer'>
           
        <div className='foot-img' >
          <img src={truck} alt="images" />
         
        </div>
     
     <div className='foot-contact'>
    
      <div>
      <h4 style={{color:"#0E2368"}}>Contact us</h4>
      <p className='address'> Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434 </p>
     
     <p className='foot-email'>example2020@gmail.com </p>
     <p className='footNumber'>(904) 443-0343</p>
     </div>
     </div>

<div className='foot-more'>
  <h4 style={{color:"#0E2368",}}>More</h4>
  <div className='more-links'>
    <ul style={{listStyle:"none"}} >
    <li>About Us</li>
    <li>Products</li>
    <li>Career</li>
    <li>Contact Us</li>
    </ul>
  </div>
</div>


        <div className='foot-links' >          
         <h4 style={{marginRight:"100px"}}>Social links</h4>  
         <div className='link'>
         <img src={facebook} alt="" />
         <img src={twit} alt="" />
          <img src={Insta} alt="" />
          </div>
          <p className='foot-copy'>© 2022 Food Truck Example</p>
         </div>

        </div>
  )
}

export default Footer