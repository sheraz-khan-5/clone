import React from 'react'
import image from '../../images/matterport-logo-light.svg'
import {AiFillPlayCircle} from 'react-icons/ai'
import 
{EDContainer,
H2Text,H3Text,
LoadSection,
LoadWrapper,
LoadingContentL,
LoadingContentR,
LoadingTitle,
PlayIcon,
LoadLabel,
LogoImage,
LabelCon,
Fade,
} from './ExampleElements'

const ExampleDelivery = () => {
    return (
        <>
           <EDContainer>
                <H2Text>Example Deliverables</H2Text>
                <H3Text>Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)</H3Text>
                <LoadSection>
                    <LoadWrapper> 
                        <LoadingContentR>
                            <Fade>
                                <LoadingTitle >mpartial-Pre-Migration</LoadingTitle>
                                <PlayIcon><AiFillPlayCircle size="70px"/></PlayIcon>
                                <LabelCon>
                                    <LoadLabel>Powered By</LoadLabel>
                                    <LogoImage src={image}></LogoImage>
                                </LabelCon>
                            </Fade>
                        </LoadingContentR>
                        <LoadingContentL >
                            <Fade>
                                <LoadingTitle >mpartial-Post-Migration</LoadingTitle>
                                <PlayIcon><AiFillPlayCircle size="70px"/></PlayIcon>
                                <LabelCon>
                                    <LoadLabel>Powered By</LoadLabel>
                                    <LogoImage src={image}></LogoImage>
                                    </LabelCon>
                            </Fade>
                        </LoadingContentL>
                    </LoadWrapper>
                </LoadSection>   
            </EDContainer>  
        </>
    )
}

export default ExampleDelivery
