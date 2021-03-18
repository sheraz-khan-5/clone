import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,
        NavbarContainer,
        NavLogo,MobileBar,
        NavMenu,NavItem,
        NavLinkS,
        NavBtnLinkS
        } from './NavbarElements'

function Navbar() {
    return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                logo
            </NavLogo>
            <MobileBar>
                <FaBars />
            </MobileBar>
              <NavMenu>
                    <NavItem>
                        <NavLinkS to='ground-truth-data'>Ground-Truth Data</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='how-it-works'>How It Works</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='fee-structure'>Fee Structure</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='example-deliverables'>Example Deliverables</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='submission-portal'>Submission Portal</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='contact-us'>Contact Us</NavLinkS>
                    </NavItem>
                    <NavBtnLinkS to='/signin'>Sign In </NavBtnLinkS>
                </NavMenu>
         
        </NavbarContainer>
    </Nav>
    </>
    )
}

export default Navbar
