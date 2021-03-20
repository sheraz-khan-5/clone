//Ground Truth Data Section Style
import styled from "styled-components"

export const GTDContainer=styled.div`
display:flex;
justify-content:center;
width:100%;
height:1500px;
padding-right: 40px;
padding-left: 40px;
margin-right: auto;
margin-left: auto;


`
export const GTDWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:85%;
padding-top:20px;
border:solid 1px ;
@media screen and (max-width:768px){
    padding:100px 0px;

}
`
export const GTDRow1 = styled.div `
display:flex;
justify-content:space-between;
/* align-items:center; */
height:400px;
max-width :100%;
position: relative;
border:solid 1px ;

padding:90px 0px;
@media screen and (max-width:768px) {
    padding:0px 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
  
}
`
export const LeftColumn = styled.div `
max-width:100%;
max-height:550px;
display:flex;

/* justify-content:center; */
/* border:solid 1px ; */
padding-top:20px;
@media screen and (min-width:201px) and (max-width:767px){
    padding:20px 0px;
    /* max-width:80%; */
    max-height:400px;
    max-width:400px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:sticky;

}

`
export const RightColumn = styled.div `
max-width:100%;
max-height:600px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:20px;
`
export const BgCircle = styled.div `
width:200px;
height:200px;
border:solid blue 30px;
border-radius:50%;
opacity:0.1;
position:absolute;
top:-0%;
left:-5%;

@media screen and (min-width:201px) and (max-width:767px){
position:absolute;
top:-5%;
left:20%;
}

`
export const TitleText=styled.div `
/* border:solid red 10px;
border-radius:50%;
z-index:1; */
max-width:400px;
display:flex;
padding-bottom:10% ;

`
export const Title = styled.h1 `
    font-family: Museo Sans Rounded\ 500,Helvetica,Arial,Sans-Serif;
font-size:42px;
letter-spacing:1.4px;
text-transform:uppercase;
font-weight:100;
margin-bottom:16px;
text-align:left;
z-index:1;
@media screen and (max-width:767px){
  
    font-size:24px;
    text-align:center;
  
  }
`
export const ParaText = styled.div `
max-width:580px;
/* padding:10px 0px; */
padding-left:20px;
display:flex;
align-items:center;
    /* border:solid 1px ; */

@media screen and (max-width:768px){
  
    height:900px;
    max-width:540px;

} 

`

export const Para = styled.p`
font-family: Museo Sans Rounded\ 500,Helvetica,Arial,Sans-Serif;
font-size:14px;
letter-spacing:1px;
font-weight:10;
margin-bottom:16px;
line-height:40px;
text-align:start;
@media screen and (max-width:768px){
  
 
  text-align:center;

}
`
//Picture-Section


