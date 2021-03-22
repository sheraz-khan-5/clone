import React,{useState} from 'react'
import Recaptcha from 'react-recaptcha';
import {
    ContactUsSection,
    FormSection,
    H2Text,
    FormContainer,
    FormWrapper,
    LabelText,
    InputArea,
    TextArea,
    MyCaptcha,
    SubmitButton
    
} from './ContactUsElements'

const ContactUs = () => {
    const [verify, setVerify] = useState(false)
    const [input, setInput] = useState({
        yourName:"",
        email:"",
        cell:"",
        textArea:""

    })
    console.log(input.length);
    const handleName =(e)=>{
        setInput({
            yourName:e.target.value,        
        })
    }
    const handleEmail =(e)=>{
        setInput({
            email:e.target.value,
        })
    }
    const handleCell =(e)=>{
        setInput({
            cell:e.target.value,
        })
    }
    const handleTextArea =(e)=>{
        setInput({
            textArea:e.target.value,
        })
    }
  
    const recaptchaLoaded=()=> {
        console.log('capcha successfully loaded');
      }
      const verifyCallback = (response)=>{
        if(response){
             setVerify({verify:true })
        
             }}
    const handleSubmit = ()=>{
        alert `Your Form is submitted :)`
    }
    return (
         
  
        <>
          
          <ContactUsSection>
          <H2Text>Contact Us</H2Text>
          <FormSection onSubmit={handleSubmit}>
              <FormContainer>
              <FormWrapper>
                  <LabelText  for="fullname">Your Name</LabelText>
                  <InputArea type="text"  value={input.yourName} onChange={handleName} required/>
                  <LabelText >Email</LabelText>
                  <InputArea type="text"  value={input.email} onChange={handleEmail} required />
                  <LabelText >Cell</LabelText>
                  <InputArea type="text"  value={input.cell} onChange={handleCell} required/>
              </FormWrapper>
              <FormWrapper>
              
              <TextArea type="text"  value={input.textArea} onChange={handleTextArea} required>Some text...</TextArea>
              </FormWrapper>
          </FormContainer> 
          <MyCaptcha><Recaptcha
            sitekey="6LeJNIsaAAAAAPaNVand8I-GNxLdU1wGL16Sb8n-"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifyCallback}
          /></MyCaptcha>
          <SubmitButton type="submit" disabled={!verify}>Submit</SubmitButton>
          
          </FormSection>   
          </ContactUsSection>  
        </>
    )
}

export default ContactUs
