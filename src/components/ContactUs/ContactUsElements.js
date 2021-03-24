import styled from 'styled-components'
import BGCircle from '../../images/BackgroundCircle.png'

export const  ContactUsSection = styled.div`
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: rgb(10, 81, 105);
    padding: 0px;
`
export const H2Text = styled.h2`
 background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:center;
    background-image:url(${BGCircle});
    font-size: 34px;
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
export const FormSection = styled.form`
border:1px solid;
padding:0px 100px;
@media screen and (max-width:768px){
    padding:0px 10px;
    }
`
export const FormContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    margin:0 auto;
    border:1px solid;
    
@media screen and (max-width:768px){
    grid-template-columns:1fr;
    padding:0 20px;
    grid-gap:0px;
}
`
export const FormWrapper = styled.div`
padding:0px 10px;
display:flex;
flex-direction:column;
flex: 0 0 50%;
padding-top:20px;
border:1px solid;
`
export const LabelText = styled.label`
  color: rgb(0, 0, 32);
  font-weight: bold;
  text-align:left;
  margin-bottom:-30px;
  z-index:1;
  margin-left:5px;
`
  export const InputArea = styled.input`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
  margin-bottom: 60px;
  border: 1px solid rgba(10,81,105,.5);
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
    `
    export const TextArea = styled.textarea`
    height:250px;
    border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
  padding: 12px 15px;
  border: 1px solid rgba(10,81,105,.5);
    border-radius: 10px;
     background: #fff;
     font-size: 14px;
    color: rgb(0, 0, 32);
    margin-top:-10px;


    `
    
    export const SubmitButton = styled.button`
    width: 159px;
    height: 40px;
    border-radius:10px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    color: #fff;
    :disabled{ 
        border-color: #a6a6a6!important;
    background: #a6a6a6!important;
    cursor: not-allowed;
    
       }
       &:enabled{ 
       
    background: #3ac280!important;
    cursor: pointer;
       }
    `
    export const MyCaptcha= styled.div`
    display:flex;
    justify-content:center;
    padding:20px;
    `