import React from 'react'
import image from '../../images/matterport-logo-light.svg'
import {AiFillPlayCircle} from 'react-icons/ai'



import {DeliverSection,
        EDContainer,
        TitleWrapper,
        VideoFram,
        H2Text,H3Text,
        LoadSection,
        LoadWrapper,
        LoadingContent,
        LoadingBackground,
        LoadingTitle,
        PlayIcon,
        LoadLabel,
        LogoImage,
        LabelCon,
        Fade
    } from './ExampleElements'

const ExampleDeliverables = () => {
    
    return (
        <>  
        <DeliverSection>
        
            <EDContainer>
                <H2Text>Example Deliverables</H2Text>
                <H3Text>Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)</H3Text>
                <LoadSection>
                    <LoadWrapper> 
                        <LoadingContent>
                            <Fade>
                                <LoadingTitle >mpartial-Pre-Migration</LoadingTitle>
                                <PlayIcon><AiFillPlayCircle size="100px"/></PlayIcon>
                                <LabelCon>
                                    <LoadLabel>Powered By</LoadLabel>
                                    <LogoImage src={image}></LogoImage>
                                </LabelCon>
                            </Fade>
                        </LoadingContent>
                        <LoadingContent>
                            <Fade>
                                <LoadingTitle >mpartial-Post-Migration</LoadingTitle>
                                <PlayIcon><AiFillPlayCircle size="100px"/></PlayIcon>
                                <LabelCon>
                                    <LoadLabel>Powered By</LoadLabel>
                                    <LogoImage src={image}></LogoImage>
                                    </LabelCon>
                            </Fade>
                        </LoadingContent>
                    </LoadWrapper>
                </LoadSection>   
            </EDContainer>
        </DeliverSection>
        </>
    )
}

export default ExampleDeliverables
