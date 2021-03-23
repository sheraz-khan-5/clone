import styled from "styled-components"
export const FooterSection = styled.div`
  background: #0a5169;
    width:100%;
    margin-top:40px;
    padding: 25px 100px;
@media screen and (min-width:1200px){
    padding: 20px 120px;
}
`

export  const FooterContainer = styled.div`
  
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

@media screen and (max-width:768px){
    flex-direction:column;
    align-items:flex-end;
}
`

export const FooterTextCon = styled.div`
display:flex;
align-items:center;
`
export const FooterText = styled.p`
    color: #fff;
    opacity: .5;
    font-size: 14px;
    margin: 0;
    text-align:left;
`
export const FooterICons = styled.div`
display:flex;
justify-content:flex-end;
`
export const UL = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
    border-radius: 5px;
    opacity: 1;
    /* box-shadow: 0 3px 6px rgb(0 0 0 / 16%); */

`
export const ListIcons = styled.li`
margin: 0 15px;
box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
`
export const LinkArea= styled.a`
    text-decoration: none;
    background-color: rgba(0,0,0,0);
   
`
export const ImageArea = styled.img`
     width: auto;
    height: 16px;
    vertical-align: middle;
    border-style: none;
`