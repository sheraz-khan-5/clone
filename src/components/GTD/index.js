//Ground Truth Data Section Style
import React from 'react'
import {GTDContainer,GTDWrapper,GTDRow1,LeftColumn,TitleText,RightColumn,ParaText,Title,Para,BgCircle} from './GTD-Elements'

const GTDSection = () => {
    return (
        <>
        <GTDContainer>
        <GTDWrapper>
            <GTDRow1>
            <BgCircle></BgCircle>
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
            <GTDRow1>
           
            </GTDRow1>
        </GTDWrapper>
        </GTDContainer>
            
        </>
    )
}

export default GTDSection
