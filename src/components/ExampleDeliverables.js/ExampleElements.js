import img from '../../images/thumbnail.jpg'
import BGCircle from '../../images/BackgroundCircle.png'
import styled from 'styled-components'


export const DeliverSection = styled.div`
    width:100%;
    display:flex;
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
width:90%;
flex-direction:column;
justify-content: center;
text-align: center;
color: rgb(10, 81, 105);
padding:20px 10px;
`
// export const TitleWrapper = styled.div`

// `
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
    /* padding:50px; */
    font-size: 32px;
}
@media screen and (min-width:201px) and (max-width:401px){
    /* padding:50px; */
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
/* height:420px; */

`
export const LoadWrapper=styled.div`
 height:480px;  
 width:90%;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr;
/* align-items:center; */
justify-content:center;
grid-gap:16px;


    /* @media screen and (max-width:1020px){ */
        /* grid-template-columns: 1fr ; */
        /* padding:0 20px;
        
    } */
@media screen and (max-width:768px){
    grid-template-columns:1fr;
    height:1000px; 
    padding:0 20px;
    grid-gap:20px;
}
  
    


`
export const LoadingContent = styled.div`
background-image:url(${img});
/* s */

transition: opacity .5s;
    background-color: rgba(0,0,0,.4);
z-index:1;
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
    background-color: rgba(0,0,0,.4);

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
/* padding-top:20px; */


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
    