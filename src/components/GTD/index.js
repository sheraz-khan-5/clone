//Ground Truth Data Section Style
import React,{useRef,useEffect,useState} from 'react'
import Arrow from '../../images/arrow.png'

import {
    GTDContainer,
    GTDWrapper,
    GTDRow1,
    LeftColumn,
    TitleText,
    RightColumn,
    ParaText,
    Title,
    Para,
    CompareImageSection,
    ImageWrapper,
    Images,
    Image1,
    Image2,
    SliderBar,
    SliderInput,
    DragLine,
    Arrow1,
    BtnWrapper,
    BtnRoute



} from './GTD-Elements'

const GTDSection = () => {
    // const slider = useRef();
    // const dragPosition = useRef(null);
    // const imageWidth = useRef(null);
    //    const slider1 = slider.current.value
    //    const img = imageWidth.current.styel.width;
    //    const dragLine = dragPosition.current.style.left;

    //   slider1.oninput = ()=>{
    //     let sliderVal = slider.value;
    //     dragLine = sliderVal + "%";
    //     img = sliderVal + "%";
    //   }
    


    return (
        <>
        <GTDContainer id={'ground-truth-data'}>
        <GTDWrapper>
            <GTDRow1>
                <LeftColumn>
                    <TitleText>
                    <Title>GROUND-TRUTH DATA EVERYONE TRUSTS</Title>
                    </TitleText>
                </LeftColumn>
                <RightColumn>
                <ParaText>
                    <Para>We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TruePlan are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals.</Para>
                </ParaText>
                </RightColumn>
            </GTDRow1>
        </GTDWrapper>
           {/* <CompareImageSection>
           <ImageWrapper>
               <Images>
            <Image1 />
            <Image2 ref={imageWidth}  />
            <SliderBar>
            <DragLine ref={dragPosition}>
                <Arrow1 src={Arrow}></Arrow1>
           </DragLine>
              <SliderInput ref={slider} type="range" min="0" max="100" value="50"/>
            </SliderBar>
           </Images>
           </ImageWrapper>
                     <BtnWrapper>
                      <BtnRoute to='/signup'>Try It</BtnRoute>
                     </BtnWrapper> 
           </CompareImageSection>
                */}
        
        
        </GTDContainer>
              
            
        </>
    )
}

export default GTDSection
