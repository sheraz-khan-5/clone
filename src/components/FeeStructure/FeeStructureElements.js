import styled from 'styled-components'
import BgCircle from '../../images/BackgroundCircle.png'

export const FsContainer = styled.div `
    height:750px;
    width:100%;
    background:#fff;
    display:flex;
    justify-content:center;
`
export const FSWrapper = styled.div `    
    width:90%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    
    @media screen and (min-width:201px) and (max-width:401px){
    margin:10px;
}
`
export const H1Wrapper = styled.div `
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:center;
    background-image:url(${BgCircle});
    background-position: 50%;
    padding: 12%;
    
    @media screen and (max-width:768px){
    background-size: 180px 180px;
    }
`
export const FSH1 = styled.h1 `
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0;
    color: #222;
    opacity: 1;
    text-align:center;
    
    @media screen and (min-width:768px) and (max-width:920px){
    font-size: 38px;
}
    @media screen and (max-width:768px){
    font-size: 36px;
    line-height:45px;
}
    @media screen and (min-width:201px) and (max-width:401px){
    font-weight: 600;
    font-size: 28px;
}

`
export const RangeSliderWrapper = styled.div `
    width:100%;
    position:relative;
    justify-content:center;
    display:flex;

    @media screen and (max-width:768px){
    width:90%;
}

`
export const RangeSlider = styled.input `
    background:rgba(10,81,105,.06) 0 0 padding-box;
    height:15px;
    border-radius: 10px;
    width:92%;
    cursor: pointer;
    -webkit-appearance:none;
  &:focus{
      outline:none;
  }
    @media screen and (max-width:768px){
    width:100%;
}
    &::-webkit-slider-thumb{
    appearance:none;
    -webkit-appearance:none;
    background-color: #dff1eb;
    border:4px solid #3ac280;
    border-radius:50%;
    width:35px;
    height:35px;
    background:white;
    cursor: pointer;
   
    }
`

export const SliderToolTip = styled.h5 `
    width: 170px;
    height: 80px;
    line-height:0.91;
    text-align: center;
    position: absolute;
    background-color: #dff1eb;
    font-weight: 400;
    font-size: 22px;
    border-radius: 4px;
    display: inline-block;
    color: #0a5169;
    bottom:100%;
    margin-bottom:2.5%;
    padding:10px;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0);   

    &::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: #dff1eb transparent transparent transparent;
  }
  
    @media screen and (max-width:768px){
    width: 140px;
    height: 70px;
    font-size: 20px;
    margin-bottom:7%;
    padding:0px;
    }
 `
export const LabelBarList = styled.ul `
    list-style-type:none;
    display:flex;
    justify-content:space-between;
    width:88%;
    position:relative;
    margin-top:-30px;
 `
export const LabelBarListItem = styled.li `
    font-family: Gilroy;
    color: rgb(132, 167, 179);
    font-size: 12px;
    font-weight: 600;
 
 &::before {
     content:"|";
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     padding-bottom:5px;
     font-size:32px;
     font-weight: 400;
     color: rgb(211, 211, 211);
 }
 `
export const DescWrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const DescP = styled.p `
    font-family: 'Raleway',sans-serif;
    max-width: 620px;
    margin: 0px auto;
    text-align: center;
    font-size: 14px;
    color:#424642;
`
export const MPPartialFee = styled.div `
    width: 195px;
    height: 108px;
    margin: 30px auto 15px;
    padding: 25px 0;
    text-align: center;
    background: #0a5169;
    border-radius: 10px;
    position: relative;
`
export const FeePopUp = styled.i `
    position: absolute;
    right: 6%;
    top: 5%;
    font-size: 15px;
    color: #fff;
    font-style: normal;
    border-radius: 50%;
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    line-height: 19px;
    cursor: pointer;
`
export const PopText = styled.div `
    visibility:${({isPopUp})=>(isPopUp ? 'visible' : 'hidden')};
     width: 250px;
    font-style: normal;
    color: #424642;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: .875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    border-style: solid;
    padding: 10px;
    position: absolute;
    z-index: 1060;
    bottom: 100%;
    left: 20%;
    margin-bottom: 3px;

  
  
    &::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }
`
export const FeeLabel = styled.label `
    font-size: 28px;
    margin: 0;
    display: block;
    color: #fff;
    line-height: 38px;
    font-family: 'Rounded ', sans-serif;
    font-weight:520;
`
export const FeeLabeeInfo = styled.span `
    font-size: 14px;
    color: #fff;
    font-weight: 400;
`
export const InfoText = styled.p `
    font-family: ' Rounded', sans-serif;
    margin-top: 0;
    margin-bottom: 1rem;
    color:#0a5168;
    font-weight: 545;
`