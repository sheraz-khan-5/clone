import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav =styled.nav`
    background:${({scrollNav})=>(scrollNav ? 'white': 'tranparent')};
    height:60px;
    margin-top:-80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.8rem;
    position:sticky;
    top:0;
    z-index:1000;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid hsla(0,0%,100%,.5);
    transition: all 0.7s ease 0s;
@media screen and (max-width:960px){
    transition:0.8s all ease;
}
@media screen and (max-width:1124px){
    transition:0.8s all ease;
    background:#fff;
}
`
export const NavbarContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:60px;
    z-index:1;
    width:100%;
    max-width:1150px;
`
export const NavLogo=styled(LinkR)`
    color:black;
    display:flex;
    justify-self:flex-end;
    cursor: pointer;
    position:sticky;
    top:0;
    font-size:1.5rem;
    text-decoration:none;
    transform:translate(-300% 0%);
`
export const LogoImage = styled.img`
    max-width: 217px;
`
export const MobileBar=styled.div`
    display:none;

@media screen and (max-width:1080px){
    display:block;
    color:black;
    position:absolute;
    right:0;
    top:0;
    font-size:1.25rem;
    cursor: pointer;
    transform:translate(-300%,90%);   
}
`
export const NavMenu=styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    color:${({scrollNav})=>(scrollNav ? 'black': 'white')};
@media screen and (max-width:1124px){
    display:none;
}
`
export const NavItem = styled.li`
    height:60px;

`

export const NavLinkS = styled(LinkS)`
    display:flex;
    align-items:center;
    padding:0 1rem;
    text-decoration:none;
    height:100%;
    cursor:pointer;
    font-weight: 100;
    letter-spacing:0.3px; 
    font-weight: 400;
    font-size: 12\px;
&.active{
    color:#3ac280; 
}
&:hover{
 color:#3ac280 ;
}
`
export const NavBtnLinkS =styled(LinkR)`

  background: #3ac280 0 0 no-repeat padding-box;
    color:#fff;
    border-color: #3ac280;
    border-radius: 20px;
    height: 30px;
    padding: 7px 25px;
    letter-spacing: 0;
    font-size: 0.8rem;
    line-height: 16px;
    white-space: nowrap;
    min-width: 20px;
    text-decoration: none;
    cursor:pointer;
`
