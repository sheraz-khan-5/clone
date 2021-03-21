import React from 'react'
import {HIWContainer,HIWH1,HIWH2,HIWWapper,HIWCards,HIWP,BtnRoute,BtnWrapper} from './HIWElements'

const HowItWorks = () => {
    return (
        <>
          <HIWContainer id="how-it-works">
              <HIWH1>How It Works</HIWH1>
              <HIWWapper>
                  <HIWCards>
                      <HIWH2>1</HIWH2>
                      <HIWP>Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.</HIWP>
                  </HIWCards>
                  <HIWCards>
                      <HIWH2>2</HIWH2>
                      <HIWP>Submit the Matterport scans via the mpartial portal and then go back to what you do great.</HIWP>
                  </HIWCards>
                  <HIWCards>
                      <HIWH2>3</HIWH2>
                      <HIWP>Receive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TruePlan SKX</HIWP>
                  </HIWCards>
              </HIWWapper>
                <BtnWrapper>
                    <BtnRoute to='/signin'>Get Started</BtnRoute>
                </BtnWrapper>
              
        </HIWContainer>  
        </>
    )
}

export default HowItWorks
