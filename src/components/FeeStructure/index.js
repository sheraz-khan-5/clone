import React,{useState} from 'react'

import {
    FsContainer,
    FSWrapper,
    H1Wrapper,
    FSH1,
    SliderContainer,
    RangeSlider,
    DescWrapper,
    DescP,
    MPPartialFee,
    FeePopUp,
    FeeLabel,
    FeeLabeeInfo
    


} from './FeeStructureElements'

const FeeStructure = () => {
    const [value, setValue] = useState(50000)

   
    return (
        <>
            <FsContainer>
                <FSWrapper>
                    <H1Wrapper>
                        <FSH1>Waterfall Fee Structure</FSH1>
                    </H1Wrapper>
                
                <SliderContainer>
                    <RangeSlider type="range" min='0' max='1000000' value={value}  steps={1} >
                        
                        
                    </RangeSlider>
                    {value}
                </SliderContainer>
                <DescWrapper>
                    <DescP>Drag the slider around based on what you think it will cost to repair the property.
                        <br/>
                            Move forward based on the estimated fee structure below.
                     </DescP>
                     <MPPartialFee>
                         <FeePopUp>i</FeePopUp>
                         <FeeLabel>7.50 %</FeeLabel>
                         <FeeLabeeInfo>mpartial Fee</FeeLabeeInfo>
                     </MPPartialFee>
                </DescWrapper>
                </FSWrapper>
            </FsContainer>
        </>
    )
}

export default FeeStructure
