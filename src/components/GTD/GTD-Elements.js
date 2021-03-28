//Ground Truth Data Section Style
import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"
import BGCircle from '../../images/BackgroundCircle.png'
import Pre from '../../images/pre.jpg'
import Post from '../../images/post.jpg'


export const GTDContainer=styled.div`
  padding-right: 40px;
  padding-left: 40px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  padding:10px 100px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
@media screen and (min-width:768px) and (max-width:1110px){
    padding:10px 50px;;
}
@media screen and (max-width:1230px){
    display:none;
}
`
export const GTDWrapper = styled.div`
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position-x:10px;
    background-position-y:20px;
    background-image:url(${BGCircle});
    max-width:100%;
    padding:90px 0px;

@media screen and (max-width:768px){
    background-size: 200px 200px;
    background-position-x:50%;
    background-position-y:25%;
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
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
`
export const LeftColumn = styled.div `
    padding:35px 100px 0px;
    width:100%;

@media screen and (min-width:201px) and (max-width:767px){
    padding:150px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
}

@media screen and (min-width:768) and (max-width:920){ 
    padding:20px 0px;
}
`
export const RightColumn = styled.div `
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const TitleText=styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10 50  0px;
@media screen and (min-width:768px) and (max-width:950px){
    padding:0 10px;
}

`
export const Title = styled.h1 `
    font-family: Museo Sans Rounded\ 500,Helvetica,Arial,Sans-Serif;
    font-size:42px;
    letter-spacing:1.4px;
    text-transform:uppercase;
    font-weight:100;
    line-height:50px;
    padding:0px 20px  0px; 
    text-align:left;


@media screen and (max-width:768px){
    font-weight:530;
    font-size:28px;
    text-align:center;
    letter-spacing:-2px;
    max-width:400px;
    line-height:30px;
    
  
  }
  
@media screen and (min-width:768px) and (max-width:920px){
    font-size:35px;
    letter-spacing:1px;
    text-transform:uppercase;
    font-weight:100;
    line-height:40px;
    padding:0px 0px  0px; 
}

`
export const ParaText = styled.div `
    width:100%;
    display:flex;
    align-items:flex-end;
`
export const Para = styled.p`
  
    font-size:14px;
    letter-spacing:1px;
    font-weight:10;
    line-height:35px;
    text-align:start;
    color:#333333;
@media screen and (max-width:768px) {
  
  font-size:14px;
  text-align:center;
  letter-spacing:1px;
  line-height:25px;
  text-align:center;
}
@media screen and (min-width:768px) and (max-width:920px){
  font-size:14px;
  text-align:center;
  letter-spacing:1px;
  line-height:23px;
  text-align:center;
}
`
/*-------------------------Compare-Image-Section--------------------------------*/

export const CompareImageSection = styled.div`
  width:100%;
`
export const ImageWrapper = styled.div`
  height:550px;
  background:#fff;
  box-shadow:0px 0px 15px reba(0,0,0,0,15);
  position: relative;
  width:90%;
  margin-left:60px;
`
export const Image1 = styled.div`
  position:absolute;
  height: 550px;
  width:100%;
  background:url(${Pre}) no-repeat;
`
export const Image2 = styled.div`
  position: absolute;
  height: 100%;
  background:url(${Post}) no-repeat;
`
export const SliderBar = styled.div`
  position:absolute;
  top:0;
  width:100%;
cursor: ew-resize;
`
export const SliderInput = styled.input`
  width:100%;
  outline:none;
  background:none;
  border:none;
  cursor: ew-resize;
-webkit-appearance:none;
&::-webkit-slider-thumb{
  height: 486px;
  width: 3px;
  background: none;
  -webkit-appearance: none;
  
}
`
export const DragLine=styled.div`
  display:flex;
  align-items:center;
  width: 2px;
  height: 550px;
  position: absolute;
  pointer-events: none;
  outline:none;
  &::before,
&::after{
  position: absolute;
  content: "";
  width: 100%;
  height: 500px;
  background: rgb(58, 194, 128);
  
}
&::before{
  top: 0;
}
&::after{
  bottom: 0;
}
`
export const Arrow1 = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const BtnWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 40px;
  padding:100px 0 50px;
`
export const BtnRoute = styled(LinkR)`
    background: #3ac280 0 0 no-repeat padding-box;
    font-size:18px;
    text-align:center;
    color:#fff;
    border-color: #3ac280;
    border-radius: 20px;
    height: 40px;
    width: 159px;
    padding: 10px 25px;
    letter-spacing: 0;
    white-space: nowrap;
    cursor:pointer;
    text-decoration:none;

    &:hover{
      color:#000;
    }
`