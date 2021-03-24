import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import FilledCircle from '../../images/FilledCircle.png'
export const HIWContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background:rgba(10,81,105,.05) 0 0 no-repeat padding-box;
border:solid 1px;

`

export const HIWH1 = styled.h1`
    width:100%;
    font-size: 48px;
    font-weight: 400;
    line-height: 3;
    color: #212529;
    text-align: center;
    margin:60px;
    @media screen and (min-width:768px) and (max-width:920px){
        font-size: 32px;
}
    @media screen and (max-width:768px){
    border:solid 1px;
    font-size: 18px;
}
`
export const HIWWapper = styled.div`
border:solid 1px;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
margin-left:50px;
margin-right:50px;



@media screen and (max-width:768px){
    grid-template-columns:1fr;

}
`
export const HIWCards = styled.div `
display:flex;

align-items:center;
justify-content:center;
padding:20px;

@media screen and (max-width:768px){
    flex-direction:column;


`
export const HIWH2 = styled.h1`

    text-align: left;
    background-position: bottom;
    font-weight: 700;
    font-size: 160px;
    letter-spacing: 0;
    color: #0a5169;
    opacity: 1;
    min-height: 143px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    padding:20px;

    @media screen and (max-width:768px){
        font-size: 100px;
        line-height: 150px;
        background-position-y:30px;
        background-size:100%;
        width:100%;
        text-align:center;
        padding:0px;
  ;

    }
    @media screen and (min-width:768px) and (max-width:920px){
        font-size: 90px;
        font-weight: 600;
        padding:0px;

}
@media screen and (min-width:768px) and (max-width:1120px){
        font-size: 120px;
        font-weight: 600;
}

`
export const HIWP = styled.p`
    text-align: left;
    font-size: 12px;
    line-height: 21px;
    letter-spacing:1px;
    color: #000;
    opacity: 1;
   
    @media screen and (max-width:768px) {
        padding-bottom:80px;
        text-align:center;
}
`
export const BtnWrapper = styled.div`
display:flex;
justify-content:center;
margin:20px 0px 40px ;
`
export const BtnRoute = styled(LinkR)`
    background: #3ac280 0 0 no-repeat padding-box;
    color:#fff;
    border-color: #3ac280;
    padding:12px 40px;
    border-radius: 30px;
    text-align:center;
    letter-spacing: 0;
    font-size: 14px;
    line-height: 16px;
    white-space: nowrap;
    min-width: 20px;
    cursor:pointer;
    text-decoration:none;
`