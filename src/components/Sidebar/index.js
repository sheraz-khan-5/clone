import React from 'react'
import {SidebarContainer,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SidebarBtnWrapper,
        SidebarRoute
        } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer   isOpen={isOpen} onClick={toggle}  >   
            <SidebarWrapper >
                <SidebarMenu > 
                    <SidebarLink to='ground-truth-data'>Ground-Truth Data</SidebarLink>
                    <SidebarLink to='how-it-works'>How It Works</SidebarLink>
                    <SidebarLink to='fee-structure'>Fee Structure</SidebarLink>
                    <SidebarLink to='example-deliverables'>Example Deliverable</SidebarLink>
                    <SidebarLink to='submission-portal'>Submission Portal</SidebarLink>
                    <SidebarLink to='contact-us'>Contact Us</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
