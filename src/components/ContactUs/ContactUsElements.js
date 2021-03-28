import styled from 'styled-components'
import BGCircle from '../../images/BackgroundCircle.png'

export const ContactUsSection = styled.div `
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: rgb(10, 81, 105);
    padding: 0px;
`
export const H2Text = styled.h2 `
    font-family: 'M PLUS Rounded 1c', sans-serif;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:center;
    background-image:url(${BGCircle});
    font-size: 45px;
    font-weight: 400;
    line-height: 6;
    color: #212529;
    text-align: center;
    padding:20px 10px;
    @media screen and (min-width:768px) and (max-width:920px){
    font-size: 32px;
}
    @media screen and (max-width:768px){
    font-size: 32px;
    }
`
    export const FormSection = styled.form `
    padding:0px 100px;
    @media screen and (max-width:768px){
    padding:0px 10px;
    }
`
    export const FormContainer = styled.div `
    display:grid;
    grid-template-columns:1fr 1fr;
    margin:0 auto;
    @media screen and (max-width:768px){
    grid-template-columns:1fr;
    padding:0 20px;
    grid-gap:0px;
}
`
    export const FormWrapper = styled.div `
    padding:0px 10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    flex: 0 0 50%;
    padding-top:20px;
`
    export const LabelText = styled.label `
    font-family:'Ralvey' sans-serif;
    display: block;
    pointer-events: none;
    line-height: 1em;
    margin-top: calc(-3em - 2px);
    margin-bottom: calc((4em - 1em) + 20px);
    font-weight: 600;
    color: rgba(73,80,87,.8)!important;
  
&:before {
    content: "";
    display: inline-block;
    margin: 0 calc(0.5em + 0px);
    padding: 0 2px;
    white-space: nowrap;
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(to bottom, #fff, #fff);
    background-size: 100% 5px;
    background-repeat: no-repeat;
    background-position: center;
}
`
export const InputArea = styled.input `
    font-family: 'Raleway',sans-serif;
    box-sizing: border-box;
    width: 100%;
    height: calc(3em + 10px);
    margin: 0 0 1em;
    border-radius: 10px;
    padding: 12px 15px;
    border: 1px solid rgba(10,81,105,.5);
    background: #fff;
    resize: none;
    outline: none;
    &:focus + ${LabelText}
    {
    transition-duration: .3s;
    transform:translate(0, -1.3em) scale(0.9, 0.9)
  }
     `
export const TextArea = styled.textarea `
    height: 240px;
    font-size: 14px;
    width: 100%;
    border: 1px solid rgba(10,81,105,.5);
    border-radius: 10px;
    padding: 12px 15px;
    outline:none;
    resize: none;
    &:focus + ${LabelText}{  
    transition-duration: .3s;
    transform: translate(0, -1.3em) scale(0.9, 0.9); 
     }
    `
export const SubmitButton = styled.button `
    width: 159px;
    height: 40px;
    border-radius:20px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    color: #fff;
    box-sizing: border-box;
    background: #3ac280 0 0 no-repeat padding-box;
    border-color: #3ac280;
    background: #3ac280!important;
    cursor: pointer;
    &:hover{
        color:#000;
    }
    &:disabled{ 
      
    background: #a6a6a6;
    cursor: not-allowed;
    border-color: #a6a6a6!important;
    background: #a6a6a6!important;
    }`
export const MyCaptcha = styled.div `
    display:flex;
    justify-content:center;
    padding:20px;
    `