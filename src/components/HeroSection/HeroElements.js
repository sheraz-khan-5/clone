import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const HeroContainer = styled.div`
display:flex;
justify-content:center;
height:645px;
align-items:center;
position: relative;
z-index:1;
overflow:hidden;
:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
`
export const HeroBg = styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
height:100%;
width:100%;
overflow:hidden;
`
export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a24;
`
export const HeroContent = styled.div`
max-width:650px;
max-height:500px;
position:absolute;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
`
export const HeroP = styled.p`
font-family:apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
color:#fff;
line-height: 45px;
font-size:34px;
font-weight:350;
text-align:center;
position:relative;
letter-spacing:2px;
text-shadow: 0 3px 6px rgb(0 0 0 / 16%);
-webkit-font-smoothing: antialiased;
`
export const HeroScroll = styled.div`
margin-top:270px;
display:flex;
flex-direction:column;
align-items:center;
border:solid #131111 2px;
border-radius:20px;
height:45px;
width:30px;
position:absolute;
cursor: pointer;
:hover{
    border-color:#3ac280; 
}
@media screen and (max-width:760px){
   display:none;
 }
 `
export const HeroLink = styled(LinkS)`
 width:20px;
 height:40px;
 display:flex;
 justify-content:center;
 font-weight: 400; 
 color:#131111;
 font-size:0.7rem;
 border-radius: 50px;
    :hover{
    color:#3ac280;
    margin-top:20px;
    transition: 0.4s ease-in-out;
}
 
 


`



