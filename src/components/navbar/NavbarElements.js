import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav =styled.nav`

height:60px;
margin-top:-80px;
display:flex;
justify-content:center;
align-items:center;
font-size:0.8rem;
position:sticky;
top:0;
z-index:10;
border-bottom:solid red 0.8px;
@media screen and (max-width:960px){
transition:0.8s all ease;
}
/* @media screen and (max-width:960px){
opacity:0;
} */
`
export const NavbarContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:60px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`
export const NavLogo=styled(LinkR)`
color:#fff;
display:flex;
justify-self:flex-end;
cursor: pointer;
position:sticky;
top:0;
font-size:1.5rem;
margin-left:50px;
font-weight:bold;
text-decoration:none;
transform:translate(-300% 0%)
`
export const MobileBar=styled.div`
display:none;

@media screen and (max-width:1124px){
    display:block;
    color:#fff;
    position:absolute;
    right:0;
    top:0;
    font-size:1.25rem;
    cursor: pointer;
    transform:translate(-300%,90%)
    
}

`
export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;

@media screen and (max-width:1124px){
    display:none;

}
`
export const NavItem = styled.li`
height:60px;
`

export const NavLinkS = styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
text-decoration:none;
height:100%;
cursor:pointer;
font-weight: 100;
letter-spacing: 1;

&.active{
    color:#3ac280; 
}
&:hover{
 color:#3ac280 ;
}
`

export const NavBtnLinkS =styled(LinkS)`

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
    cursor:pointer;

`
