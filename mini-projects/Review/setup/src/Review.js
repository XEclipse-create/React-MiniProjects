import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const{name,job,image,text} = people[index]
  const check=(number)=>{
    if(number>people.length-1){
      return 0;
    }
    if(number<0)
    {
      return people.length-1;
    }
  
    return number
  }

  const nextName=()=>{
    setIndex((index)=>{
      let newIndex = index+1;
      return check(newIndex)
    })
    
  }
  const prevName=()=>{
    setIndex((index)=>{
      let newIndex = index-1;
      return check(newIndex)
    })
  }
  return(
    <article className='review'>
      <div className='img-container'>
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className ='job'>{job}</p>
      <p className ='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevName}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextName}>
          <FaChevronRight/>
        </button>
        
      </div>
      <button className='random-btn'>hello</button>
      
    </article>
  )
};

export default Review;
