import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position:fixed;
  z-index:999;
  width:100%;
  height:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  top:0;
  cursor: pointer;
  background-color:white;
  transition:all 0.7s ;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  top:${({isOpen})=>(isOpen ? '9.6%':'-50%')};
@media screen and (min-width:1124px){
  display:none;
}
` 
export const SidebarWrapper = styled.div`
  color:#4a4848;
  font-size: 0.8rem;
  font-weight: 400px;
  opacity: 1;
`
export const SidebarMenu = styled.ul`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-between;
  list-style:none;
  text-align:center;
`
export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
padding:0.5rem 0rem;
text-decoration:none;
height:100%;
cursor:pointer;
letter-spacing: 0.5;
transition: 0.2s ease-in-out;
&.active{
    color:#3ac280; 
}
&:hover{
 color:#3ac280 ;
}
`
export const SidebarBtnWrapper = styled.div`
  display:flex;
  justify-content:center;
  padding-top:10px;

`
export const SidebarRoute = styled(LinkR)`
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
    text-decoration:none;
`