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
     const [isActive,setActive]= useState(false)
    const [inputValue, setInput] = useState({
        yName:"",
        email:"",
        cell:"",
        textArea:""
    })
    const handleInputs =(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setInput((prevs)=>{
            if(name==="yName"){
              return{  yName:value,
                email:prevs.email,
                cell:prevs.cell,
                text:prevs.textArea
            }
            }else  if(name==="email"){
                return{  yName:prevs.yName,
                  email:value,
                  cell:prevs.cell,
                  text:prevs.textArea
              }
              }
              else  if(name==="cell"){
                return{ yName:prevs.yName,
                email:prevs.value,
                cell:value,
                text:prevs.textArea,

                
              }}else{
                return{ yName:prevs.yName,
                  email:prevs.email,
                  cell:prevs.cell,
                  text:value
              }
              }
        })
    }
  console.log(isActive)
    const recaptchaLoaded=()=> {
        console.log('capcha successfully loaded');
      }
      const verifyCallback = (response)=>{
        if(response){
             setVerify(true)
        
             }}
    const handleSubmit = ()=>{
        alert `Your Form is submitted :)`
    }
    return (
        <>
          <ContactUsSection >
          <H2Text id={"contact-us"}>Contact Us</H2Text>
          <FormSection onSubmit={handleSubmit} >
              <FormContainer>
              <FormWrapper>
                  <InputArea type="text" 
                    name="name"
                    onChange={handleInputs}
                    required isActive={isActive}  />
                  <LabelText   >Your Name</LabelText>
                  <InputArea type="email" name="email"onChange={handleInputs} required />
                  <LabelText >Email</LabelText>  
                  <InputArea value={inputValue.cell} type="tel"
                    name="cell"
                     onChange={handleInputs} 
                     required
                     pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                     step="any"
                     min="0"
                     max="9"/>
                  <LabelText >Cell</LabelText>
              </FormWrapper>
              <FormWrapper>  
              <TextArea type="text"
                    name="textArea"
                    onChange={handleInputs}
                    required/>
               <LabelText >Write your message </LabelText>
              </FormWrapper>
          </FormContainer> 
          <MyCaptcha>
            <Recaptcha
              sitekey="6LeJNIsaAAAAAPaNVand8I-GNxLdU1wGL16Sb8n-"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifyCallback}
          /></MyCaptcha>
          <SubmitButton type="submit"disabled={!verify}>Submit</SubmitButton>
          </FormSection>   
          </ContactUsSection>  
        </>
    )
}

export default ContactUs
