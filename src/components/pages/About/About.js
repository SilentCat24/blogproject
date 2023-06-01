import React from 'react';

import Pharma from '../../media/food.jpg';
import './About.scss';

export const About = () => {
  return (
    <div classNasme='body'>
      <div className='container'>
       <div  className='image'>
            <img src={Pharma} />  
             </div>
        
        <div className='content'>
            <h2 className='about'>About Us </h2>
            <p className='paragrapgh' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries
            </p>
            <button className='button'><span className='text'>Read More</span></button>
        </div>
       
    </div>
    </div>
  )
}
