import styled from 'styled-components'

export const FsContainer = styled.div`

height:750px;
width:100%;
background:rgba(10,81,105,.05) 0 0 no-repeat padding-box;
display:flex;
justify-content:center;
border:solid 1px;


`
export const FSWrapper = styled.div`
width:95%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
border:solid 1px;
` 
export const H1Wrapper = styled.div`

`
export const FSH1 = styled.h1`

`
export const SliderContainer= styled.div`
display: flex;
justify-content:center;
align-items:center;
width:90%;
height:50px;
background:red;


`
export const RangeSlider = styled.input`
    background:rgba(10,81,105,.05) 0 0 no-repeat padding-box;
    height:12px;
    border-radius: 10px;
    width:90%;
    color:black;
    
    &:-webkit-slider-thumb{
        -webkit-appearance:none;
    appearance: none;
    width:40px;
    height:40px;
    background:white;
    }
`
export const DescWrapper = styled.div`

`
export const DescP= styled.p`
    max-width: 620px;
    margin: 0px auto;
    text-align: center;
    font-size: 14px;

`
export const MPPartialFee = styled.div`
    width: 195px;
    height: 108px;
    margin: 30px auto 15px;
    padding: 25px 0;
    text-align: center;
    background: #0a5169;
    border-radius: 10px;
    position: relative;
`
export const FeePopUp = styled.div`
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
export const FeeLabel = styled.label`
font-size: 28px;
    margin: 0;
    font-weight: 400;
    display: block;
    color: #fff;
    line-height: 28px;
`
export const FeeLabeeInfo = styled.span`

font-size: 12px;
    color: #fff;
    font-weight: 400;

`