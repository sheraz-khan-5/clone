//Ground Truth Data Section Style
import React from 'react'
import Arrow from '../../images/arrow.png'
import Post from '../../images/post.jpg'
import Pre from '../../images/pre.jpg'
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
    BgCircle,
    GTDRow2,
    PictureContainer,
    Picture1,
    Picture2,
    SliderBarContainer,
    SlideBar,
    SliderArrowContainer,
    ArrowImage,
    BtnWrapper,
    BtnRoute



} from './GTD-Elements'

const GTDSection = () => {
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
            {/* <GTDRow2>
           <PictureContainer>
            <Picture1 src={Pre}/>
            <Picture2 src={Post} />
            <SliderBarContainer>
                <SlideBar>
                </SlideBar>
                <SliderArrowContainer>
                    <ArrowImage src={Arrow} />
                </SliderArrowContainer>
            </SliderBarContainer>
           </PictureContainer>
               <BtnWrapper>
                      <BtnRoute to='/signup'>Try It</BtnRoute>
                </BtnWrapper> 
            </GTDRow2> */}

        </GTDWrapper>
        
        </GTDContainer>
              
            
        </>
    )
}

export default GTDSection
