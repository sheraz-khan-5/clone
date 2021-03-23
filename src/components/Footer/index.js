import React from 'react'
import facebook from '../../images/fb.svg'
import instagram from '../../images/insta.svg'
import linkedIn from '../../images/in.svg'
import {FooterContainer,
       FooterSection,
       FooterTextCon,
       FooterText,
       FooterICons,
       UL,
       ListIcons,
       LinkArea,
       ImageArea
} from './FooterElements'

const Footer = () => {
    return (
        <>
           <FooterSection>
            <FooterContainer>
                <FooterTextCon>
                <FooterText>
                mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.
                </FooterText>
                </FooterTextCon>
                <FooterICons>
                    <UL>
                        <ListIcons>
                        <LinkArea href="https://web.facebook.com">
                        <ImageArea src={facebook} alt='/'/>
                        </LinkArea>
                        </ListIcons>
                        <ListIcons>
                        <LinkArea to='https://www.facebook.com/'>
                        <ImageArea src={instagram} alt='/'/>
                        </LinkArea>
                        </ListIcons>
                        <ListIcons>
                        <LinkArea to='https://www.facebook.com/'>
                        <ImageArea src={linkedIn} alt='/'/>
                        </LinkArea>
                        </ListIcons>
                    </UL>
                </FooterICons>
            </FooterContainer>   
            </FooterSection> 
        </>
    )
}

export default Footer
