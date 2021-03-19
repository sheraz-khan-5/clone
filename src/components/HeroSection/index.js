import React from 'react'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroP,HeroScroll,HeroLink} from './HeroElements'
import Video from '../../videos/homepage.mp4'


const HeroSection = () => {
    return (
        <>
          <HeroContainer>
              <HeroBg>
                  <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
              </HeroBg>
              <HeroContent>
                  <HeroP>
                      Impartial, Remote, 3rd-Party,
                      <br />
                      Estimating Engine
                      </HeroP>
                  <HeroScroll>
                      <HeroLink to="ground-truth-data"><span>|</span></HeroLink>
                  </HeroScroll>
              </HeroContent>
          </HeroContainer>  
        </>
    )
}

export default HeroSection
