import React,{useState} from 'react'
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
     const [sliderInput, setSliderInput] = useState({
         sliderPosition:50,
         imageWidth:44.5,
         dragLinePosition:44.5
     })

     const onhandle=(e)=>{
         setSliderInput({  
            sliderPosition:e.target.value,
            imageWidth:sliderInput.sliderPosition,
            dragLinePosition:sliderInput.sliderPosition
         })
     }
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
                    <Para>We have combined the best-of-breed technology platforms with an eye 
                          towards relieving you of administrative burden. Matterport 3D scans augmented by
                           TruePlan are used to generate consistent Xactimate sheets that are delivered in 
                           accord with Actionable Insights compliance rule sets. Each mpartial is produced 
                           with full transparency, unprecedented forensic photography, and infallible
                            geospatial data that collectively result in rapid approvals.
                    </Para>
                </ParaText>
                </RightColumn>
            </GTDRow1>
        </GTDWrapper>
           <CompareImageSection>
           <ImageWrapper>
            <Image1 />
            <Image2 style={{width:sliderInput.imageWidth+'%'}}/>
            <SliderBar>
            <DragLine style={{left:sliderInput.dragLinePosition + '%'}}>
                <Arrow1 src={Arrow}></Arrow1>
           </DragLine>
              <SliderInput onInput={onhandle} type="range" min="0" max="100" value={sliderInput.sliderPosition}/>
            </SliderBar>   
           </ImageWrapper>
           </CompareImageSection>
            <BtnWrapper>
                <BtnRoute to='/signup'>Try Today</BtnRoute>
                </BtnWrapper> 
        </GTDContainer>       
        </>
    )
}

export default GTDSection
