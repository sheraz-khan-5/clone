// import React,{useState, useEffect} from 'react'
import image from '../../images/matterport-logo-light.svg'
import {AiFillPlayCircle} from 'react-icons/ai'
// import image1 from '../../images/slide1.jpg'
// import image2 from '../../images/slide2.jpg'
// import image3 from '../../images/slide3.jpg'
// import image4 from '../../images/slide4.jpg'
// import image5 from '../../images/slide5.jpg'
// import image6 from '../../images/slide6.jpg'
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import sketch1 from '../../images/sketch-1.png'
import sketch2 from '../../images/sketch-2.png'

import {DeliverSection,
        EDContainer,
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
        // MPSliderSection,
        // H4Text,
        // ImageSliderCon,
        // PrevArea,
        // ImageArea,
        // NextArea,
        // SliderImage,
        TruePlanContainer,
        H3Title,
        SketchContainer,
        SketchImg,






    } from './ExampleElements'


const ExampleDeliverables = () => {
    // const [Items, setItems] = useState([])
    // const getImages = ()=>{
      
    //         const img1 = SliderData.map(item =><img src={item.image} alt="/"/>)
    //         setItems({
    //             Items:img1
    //         })
    //     }
       
    
    // useEffect(() => {
    //     getImages();
       
    // }, [])
    
    // const responsive = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 4 },
    //   ];
    return (
        <>  
        <DeliverSection id="example-deliverables" >     
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
            {/* <MPSliderSection>
            <H4Text>Immaculate. Impartial. [ESX]</H4Text>
            <ImageSliderCon>
                <PrevArea>arrow</PrevArea>
                <ImageArea>
                    <AliceCarousel 
                        // Items={Items}
                        responsive={responsive}
                         autoPlayInterval={3000}
                         autoPlayDirection="ltr"
                         autoPlay={true}
                        //  fadeOutAnimation={true}
                         mouseTrackingEnabled={true}
                        //  disableAutoPlayOnAction={true}
                        >
                             <SliderImage src={image1} alt="slider 1" />
                             <SliderImage src={image2} alt="slider 2" />
                             <SliderImage src={image3} alt="slider 3" />
                             <SliderImage src={image4} alt="slider 4" />
                             <SliderImage src={image5} alt="slider 5" />
                             <SliderImage src={image6} alt="slider 6" />

                         </AliceCarousel>
                </ImageArea>
                <NextArea>arrow</NextArea>
            </ImageSliderCon>
            </MPSliderSection> */}
            <TruePlanContainer>
                <H3Title>TruePlan [SKX]</H3Title>
                <SketchContainer>
                    <SketchImg src={sketch1} alt="/"/>
                    <SketchImg src={sketch2} alt="/"/>
                </SketchContainer>
            </TruePlanContainer>
            
        </DeliverSection>
        </>
    )
}

export default ExampleDeliverables
