import React from 'react'
import sliderImage from './sliderImage'

const Dots = (props) => {
    return (
        <div className="all-dots">
            {sliderImage.map((slider,index)=>(
            <span key={index}
                     className={`${props.activeIndex === index? 'dot active-dot': 'dot'}`}
                     onClick={(e)=>props.onclick(e.target.value = index)}>
            </span>
        ))}</div>
    )
}

export default Dots
