import img from '../../images/thumbnail.jpg'
import BGCircle from '../../images/BackgroundCircle.png'
import styled from 'styled-components'
export const DeliverSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    background-color: rgb(242, 246, 247);
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: rgb(10, 81, 105);
    padding: 15px 0px;
    border:1px solid;
`
export const EDContainer = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content: center;
    text-align: center;
    color: rgb(10, 81, 105);
    padding:20px 10px;
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
@media screen and (min-width:201px) and (max-width:401px){
    font-weight: 600;
    font-size: 14px;
    background-size: 120px 120px;
}
`
export const H3Text = styled.h3`
    padding: 10px;
    color: #212529;
    font-size: 30px;
    font-weight:10;
    letter-spacing:0.1rem;
`
export const LoadSection = styled.div`
    display:flex;
    justify-content:center;
    padding:20px 10px;
    width:100%;
`
export const LoadWrapper=styled.div`
    height:480px;  
    width:90%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-content:center;
    grid-gap:16px;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
    height:1000px; 
    padding:0 20px;
    grid-gap:20px;
}
`
export const LoadingContent = styled.div`
    background-image:url(${img});
`
export const LoadingTitle=styled.h4`
    font-size:24px;
    color:#fff;
    text-align:center;
    text-shadow: 0 0 40px rgb(0 0 0 / 20%);
    padding:20px;
`
export const Fade= styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;   
    transition: opacity .5s;
    background-color: rgba(0,0,0,.6);
`
export const PlayIcon = styled.i`
    font-size:48px ;
    color:#fff;
    padding:50px 0;
`
export const LabelCon = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const LoadLabel = styled.p`
    padding-top:50px;
    font-size: 10px;
    line-height:5px;
    letter-spacing: 1.7px;
    font-family: IBM Plex Sans;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 0 40px rgb(0 0 0 / 20%);
`
    export const LogoImage = styled.img`
    width: 150px;
    height: 50px;
    `
    //MPartial Image Slider Section
    
//     export const MPSliderSection=styled.div`
//     display:flex;
// max-width:90%;
// flex-direction:column;
// justify-content: center;
// align-items:center;
// text-align: center;
// color: rgb(10, 81, 105);
// padding:20px 10px;
//     `
//     export const H4Text = styled.h4`
    
//     `
//     export const ImageSliderCon =styled.div`
//     display:grid;
//     grid-template-columns: 50px 1fr 50px;
//     grid-template-rows:1fr;
//     justify-content:center;
//     align-items:center;
//     /* grid-gap:300px; */
//     border: 1px solid #000;
    
//     `
//     export const PrevArea = styled.div`
//     /* width:50px;
//     height:420px;
//     border: 1px solid #000; */
    
//     `
//       export const ImageArea = styled.div`
//        display:flex;
//         justify-content:center;
//         border: 1px solid #000;
//         width: 800px;
//         height:600px;
//       `
//     export const SliderImage = styled.img`
//      width: 1500px;;
//      height: 800px;


//     `
  
//     export const NextArea = styled.div`
    
//     `
//     export const AliceCarousel = styled.div`
//      /* display:flex;
//       justify-content:center; */
//       /* width: 800px;; */
     
//     `

//True Plan Section

         export const TruePlanContainer = styled.div`
             max-width:100%;
             margin: 40px 0;
             display:flex;
             flex-direction:column;
`
        export const H3Title = styled.h3`
            color: #000!important;
            border:solid 1px;
            text-align:center;
        `
        export const SketchContainer = styled.div`
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        @media screen and  (max-width:920px){
            display:flex;
            flex-direction:column;
           
}  
        `
        export const SketchImg = styled.img`
            width: 40%;
            background: #fff;
            border-radius: 20px;
            padding: 20px;
            min-height: 445px;
            margin: 1%;
             @media screen and (max-width:920px){
            width: 90%;           
}
        `