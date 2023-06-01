import React,{useEffect, useState} from 'react';
import "./slidex.scss";
// import Meal from '../../media/meal.svg';
import {Pages,Page} from '../../data';

const SlidePage = () => {

const [current,setCurrent]=useState([]);
const [pageNo,setPageNo]=useState(1)

useEffect(()=>{
  setCurrent(Pages)
},[])
  return (
    <>
<h3  className='title'>Latest Articles</h3>
    <div className='works'>
    
        {

          current.map((d)=>{
            return(
          
              <div className='cards' key={d.id} >
               
                 <img src={d.img} alt="" className='card-image' />
              <h2 style={{color:"#0E2368",fontFamily:" 'Poppins', sans-serif",fontSize:"18px"}}>{d.title}</h2>
              <p style={{color:" #444957",fontSize:"15px",margin:"10px 0px"}}>{d.desc}</p>
              <button className='btn-card' style={{fontFamily:"'Source Sans Pro', sans-serif",fontWeight:100,color: "#424961"}}>Read More</button>
             
              </div>
             
            )
          })
        }


    </div>


    <div className='pages' > 
    <button onClick={()=>{setCurrent(Pages);setPageNo(1)}}  style={{color: "#424961"}} > &lt;</button>
    <p>{pageNo}/2</p>
<button onClick={()=>{setCurrent(Page);setPageNo(2)}} style={{color: "#424961"}}>&gt; </button>
</div>
    </>
  )
}

export default SlidePage