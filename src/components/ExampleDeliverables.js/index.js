import React from 'react'
import ExampleDelivery from './ExampleDelivery'

// import image1 from '../../images/slide1.jpg'
// import image2 from '../../images/slide2.jpg'
// import image3 from '../../images/slide3.jpg'
// import image4 from '../../images/slide4.jpg'
// import image5 from '../../images/slide5.jpg'
// import image6 from '../../images/slide6.jpg'
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";


import {DeliverSection} from './ExampleElements'  
import Slider from './ImageSlider/Slider'
import TruePlaner from './TruePlaner'
const ExampleDeliverables = () => {
    
    return (
        <>  
        <DeliverSection id="example-deliverables" >     
           <ExampleDelivery/>
           <Slider />
            <TruePlaner />
        </DeliverSection>
           
        </>
    )
}

export default ExampleDeliverables
