import React,{useEffect, useState} from 'react'
import sliderImage from './sliderImage'

import "./slider.css"
import SliderContent from './SliderContent';
import Arrows from './Arrows';
import Dots from './Dots';
const len = sliderImage.length-1;
const Slider = () => {
const [activeIndex, setActiveIndex] = useState(0)

useEffect(() => {
    const intervals = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0: activeIndex+1);
    },2000);
        return ()=>clearInterval(intervals)
}, [activeIndex]);
   
return (
        <div className="slider-container">
            <h3 className="title-text">Immaculate. Impartial. [ESX]</h3>
            <SliderContent activeIndex={activeIndex} />
            <Arrows prevSlide={()=>setActiveIndex(activeIndex < 1 ? len: activeIndex-1)}
                    
                    nextSlide={()=>setActiveIndex(activeIndex === len ? 0 : activeIndex+1
                )} />
            <Dots activeIndex={activeIndex}
                  onclick={(activeIndex)=>setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Slider
