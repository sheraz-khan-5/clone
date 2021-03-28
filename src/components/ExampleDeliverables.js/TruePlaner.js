import React from 'react'
import sketch1 from '../../images/sketch-1.png'
import sketch2 from '../../images/sketch-2.png'
import {TruePlanContainer,
        H3Title,
        SketchContainer,
        SketchImg
        } from './ExampleElements'

const TruePlaner = () => {
    return (
        <TruePlanContainer>
        <H3Title>TruePlan [SKX]</H3Title>
        <SketchContainer>
            <SketchImg src={sketch1} alt="/"/>
            <SketchImg src={sketch2} alt="/"/>
        </SketchContainer>
    </TruePlanContainer>
    

    )
}

export default TruePlaner
