//Ground Truth Data Section Style
import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"
import BGCircle from '../../images/BackgroundCircle.png'


export const GTDContainer=styled.div`
padding-right: 40px;
padding-left: 40px;
margin-right: auto;
margin-left: auto;
background-color: #fff;
padding:10px 100px;


`
export const GTDWrapper = styled.div`
background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position-x:10px;
    background-position-y:20px;
    background-image:url(${BGCircle});
max-width:98%;
padding:90px 20px;
@media screen and (max-width:768px){
    background-size: 200px 200px;
    background-position-x:50%;
    background-position-y:20%;
    padding:10px 0px;

}
@media screen and (min-width:768px) and (max-width:950px){
    background-size: 200px 200px;
    background-position-x:0;
    background-position-y:0;
}
`
export const GTDRow1 = styled.div `

display:flex;
justify-content:center;
@media screen and (max-width:767px) {
    /* padding:20px 10px; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
   
  
}
`
export const LeftColumn = styled.div `

padding:20px 100px;
max-width:850px;
@media screen and (min-width:201px) and (max-width:767px){
    padding:150px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
}

`
export const RightColumn = styled.div `

display:flex;
justify-content:center;
align-items:center;
/* margin-bottom:20px; */
`
export const TitleText=styled.div `


display:flex;
justify-content:center;
padding:0px;
max-width:400px;
`
export const Title = styled.h1 `

font-family: Museo Sans Rounded\ 500,Helvetica,Arial,Sans-Serif;
font-size:42px;
letter-spacing:1.4px;
text-transform:uppercase;
font-weight:100;
line-height:60px;
/* margin-bottom:16px; */
text-align:left;


@media screen and (max-width:768px){
    font-weight:530;
    font-size:28px;
    text-align:center;
    letter-spacing:-2px;
    max-width:400px;
    line-height:40px;
    
  
  }
  
@media screen and (min-width:768px) and (max-width:950px){
    font-size:35px;
letter-spacing:1px;
text-transform:uppercase;
font-weight:100;
line-height:40px;
}

`
export const ParaText = styled.div `
max-width:550px;
/* padding:10px 0px; */
padding-left:20px;
display:flex;
align-items:flex-end;
    /* border:solid 1px ; */

@media screen and (max-width:768px){
  
    max-width:550px;

} 
@media screen and (min-width:768px) and (max-width: 920){
  
  max-width:540px;

} 
`
export const Para = styled.p`
font-family: Museo Sans Rounded\ 500,Helvetica,Arial,Sans-Serif;
font-size:14px;
letter-spacing:1px;
font-weight:10;
/* margin-bottom:16px; */
line-height:35px;
text-align:start;
@media screen and (max-width:768px) {
  
    font-size:14px;
  text-align:center;
  letter-spacing:1px;
  line-height:25px;
  text-align:center;

}
@media screen and (min-width:768px) and (max-width:950px){
    font-size:13px;
    line-height:25px;
text-align:center;
letter-spacing:1px;
}
`
//Picture-Section
export const GTDRow2 = styled.div `
    border:solid 1px ;
    width: 100%;
    /* max-height:600px; */
    height: auto;
  
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 0px;
    padding-left: 50px;
    border:solid 1px ;
    z-index:1;
`

export const PictureContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 480.75px;
    overflow: hidden;
    display: block;
  
`
export const Picture1=styled.img `
    clip: rect(auto, auto, auto, 204.748px);
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
`
export const Picture2 = styled.img `
    clip: rect(auto, 204.748px, auto, auto);
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
`
export const SliderBarContainer= styled.div `
    align-items: center;
    cursor: ew-resize;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    left: 184.748px;
    position: absolute;
    top: 0px;
    width: 40px;
    

`
export const SlideBar = styled.div`

    background: rgb(58, 194, 128);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    flex: 0 1 auto;
    height: 100%;
    width: 2px;
  
`
export const SliderArrowContainer= styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 1 0 auto;
    height: auto;
    justify-content: center;
    width: auto;

`
export const ArrowImageContainer = styled.div `
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 1 0 auto;
    height: auto;
    justify-content: center;
    width: auto;
`
 
export const ArrowImage =styled.img`
vertical-align: middle
`

export const BtnWrapper = styled.div`
display:flex;
justify-content:center;

`
export const BtnRoute = styled(LinkR)`
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