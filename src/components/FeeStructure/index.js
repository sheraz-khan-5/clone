import React,{useState,useEffect} from 'react'
import {
    FsContainer,
    FSWrapper,
    H1Wrapper,
    FSH1,
    RangeSlider,
    SliderToolTip,
    RangeSliderWrapper,
    DescWrapper,
    DescP,
    MPPartialFee,
    FeePopUp,
    FeeLabel,
    FeeLabeeInfo,
    InfoText,
    PopText,
    LabelBarList,
    LabelBarListItem
} from './FeeStructureElements'
const FeeStructure = () => {
    const [amount, setAmount] = useState(
       {
        value1:'50000',
        value2:750,
        value3:5
       });
    const [isPopUp , setPopUp] = useState(false);
    function formatCurrency(num) {
        if(num<1000){
           return "$"+ num
        }   
         else if(num>999 && num <1000000){
            return "$" +Number((num/1000).toFixed(0)) +"K"
            }
            else if(num >=1000000){
                return "$" +Number((num/1000000).toFixed(0)) +"M"
            }   
    }   
    function formateFee(feeNum,aNum) {
        // feeNum =7.50;
      if(aNum<=50000){
          return Number(feeNum/100).toFixed(2) + "%"  
      }  
      else if(aNum>=50000){
         const a=aNum/50000;
         const b=14;
         const percNum=((a*b)/100).toFixed(2);
        return Number(((feeNum/100)-percNum)).toFixed(2) + "%"   
      }      
    }          
    const handlePopUp = ()=>{ 
        setPopUp(!isPopUp)
    }
   const handleChange=(e)=>{
    setAmount(
    {
        value1:e.target.value,
        value2:amount.value2,
        value3:amount.value3
    })

}
     const moveToolTip=(aNum,tMove)=>{
        const a=aNum/50000;  
        return tMove+(a*4.41)
     }
     
     const t=moveToolTip(amount.value1,amount.value3);
    return (
        <>
            <FsContainer>
                <FSWrapper>
                    <H1Wrapper>
                        <FSH1> Waterfall Fee Structure</FSH1>
                    </H1Wrapper>
                    <RangeSliderWrapper>
                    <SliderToolTip style={{left:t +'%'}} >
                     {formatCurrency(amount.value1)}
                     <br/>
                     <p> Estimate Grand Total</p>
                     </SliderToolTip>
                    <RangeSlider onInput={handleChange} type="range" min='0' max='1000000' value={amount.value1} step={50000} >     
                    </RangeSlider>
                  
                    </RangeSliderWrapper>
                    <LabelBarList>
                        <LabelBarListItem>$0</LabelBarListItem>
                        <LabelBarListItem>$250,000</LabelBarListItem>
                        <LabelBarListItem>$500,000</LabelBarListItem>
                        <LabelBarListItem>$750,000</LabelBarListItem>
                        <LabelBarListItem>$1M</LabelBarListItem>
                    </LabelBarList>

                <DescWrapper>
                    <DescP>Drag the slider around based on what you think it will cost to repair the property.
                        <br/>
                            Move forward based on the estimated fee structure below.
                     </DescP>
                     <MPPartialFee>
                         <FeePopUp  onClick={handlePopUp}>i</FeePopUp>
                         <PopText isPopUp={isPopUp}>Fee Structure Example: An estimate grand total of $100k will result in a fee of $7,360. The $750 deposit will be collected upon submission and applied toward the overarching fee.</PopText>
                         <FeeLabel >{formateFee(amount.value2, amount.value1)}</FeeLabel>
                         <FeeLabeeInfo>mpartial Fee</FeeLabeeInfo>
                     </MPPartialFee>
                     <InfoText >[$750 Minimum]</InfoText>
                </DescWrapper>
                </FSWrapper>
            </FsContainer>
        </>
    )
}

export default FeeStructure
