import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
        Nav,
        NavbarContainer,
        NavLogo,MobileBar,
        NavMenu,NavItem,
        NavLinkS,
        NavBtnLinkS
        } from './NavbarElements'

function Navbar({toggle,isOpen}) {

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav =()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }else setScrollNav(false)
    }
    useEffect(()=>{
       window.addEventListener('scroll',changeNav)
    },[])
    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return (
    <>
    <IconContext.Provider value={{color:'#000'}}>
    <Nav isOpen={isOpen} scrollNav={scrollNav} >
        <NavbarContainer  >
            <NavLogo to='/' onClick={toggleHome}>
                logo
            </NavLogo>
            <MobileBar   onClick={toggle} >
                <FaBars />
            </MobileBar>
              <NavMenu scrollNav={scrollNav}>
                    <NavItem >
                        <NavLinkS to='ground-truth-data' 
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        // activeClass='active'
                         > Ground-Truth Data</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='how-it-works'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        // activeClass='active'
                        >How It Works</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='fee-structure'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Fee Structure</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='example-deliverables'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Example Deliverables</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='submission-portal'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Submission Portal</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='contact-us'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Contact Us</NavLinkS>
                    </NavItem>
                    <NavBtnLinkS to='/signin'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Sign In </NavBtnLinkS>
                </NavMenu>
         
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
    )
}

export default Navbar
