import React from 'react'
import prev from '../../../images/prev.png'
import next from '../../../images/next.png'
const Arrows = (props) => {
    return (
        <div className="arrows">
        <span className="prev" onClick={props.prevSlide} >
            <img class="prev-image"src={prev} alt="/"/>
        </span>    
        <span className="next" onClick={props.nextSlide}>
            <img class="next-image"src={next} alt="/"/>
        </span>    
        </div>
    )
}

export default Arrows
