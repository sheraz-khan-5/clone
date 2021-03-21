import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'

export const HIWContainer = styled.div`
height:600px;
display:flex;
flex-direction:column;
/* justify-content:center; */
align-items:center;
background:rgba(10,81,105,.05) 0 0 no-repeat padding-box;
border:solid 1px;


@media screen and (max-width:768px){
    height:1050px;
    border:solid 1px;
}
@media screen and (min-width:768px) and (max-width:920px){
     max-height:450px;
    border:solid 1px;
}
/* @media screen and (max-width:480px){
    height:1200px;
} */
`

export const HIWH1 = styled.h1`
    font-size: 48px;
    font-weight: 400;
    line-height: 6;
    color: #212529;
    text-align: left;
    @media screen and (min-width:768px) and (max-width:920px){
        font-size: 32px;
}
    @media screen and (max-width:768px){
    /* padding:50px; */
    border:solid 1px;
    font-size: 18px;
}
`
export const HIWWapper = styled.div`
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;

@media screen and (max-width:1020px){
    /* grid-template-columns: 1fr ; */
    padding:0 50px;
    
}
@media screen and (max-width:768px){
    grid-template-columns:1fr;
    padding:0 20px;
    grid-gap:50px;
}
`
export const HIWCards = styled.div `
display:flex;
flex-direction:flex-start;
align-items:center;
max-height:700px;
border:1px solid;

@media screen and (max-width:768px){
    flex-direction:column;
    max-height:800px;
    
}


`
export const HIWH2 = styled.h1`

      background-repeat: no-repeat;
    text-align: left;
    background-position: bottom;
    font-weight: 700;
    font-size: 167px;
    letter-spacing: 0;
    color: #0a5169;
    opacity: 1;
    min-height: 143px;
    @media screen and (max-width:768px){
        font-size: 100px;
        line-height: 120px;
        background-position: center;

    }
    @media screen and (min-width:768px) and (max-width:1024px){
        font-size: 90px;
        font-weight: 600;
}

`
export const HIWP = styled.div`
    text-align: left;
    font-size: 12px;
    line-height: 21px;
    letter-spacing: -.14px;
    color: #000;
    opacity: 1;
   
    @media screen and (min-width:768px) {
        padding-bottom:80px;
}
`
export const BtnWrapper = styled.div`
display:flex;
justify-content:center;
margin-top:50px;
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