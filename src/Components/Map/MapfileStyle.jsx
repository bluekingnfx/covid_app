import styled from "styled-components"

export const MapDiv = styled.div`
display:flex;
justify-content:center;
align-items: center;
width:100%;
height:700px;
`

export const MiniMapContainer = styled.div`
position:absolute;
width:130px;
height:130px;
bottom:20px;
cursor:pointer;
border-radius:10px;
left:20px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
z-index:9990;
`
export const FlgImg = styled.img`
width:80px;
height:50px;
margin:10px;
margin-top:0;
border-radius:5px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
/* box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 70px 4px; */

`
export const CountryName = styled.h3`
margin:0;
margin-left:10px;
color:#666666;
`
export const NumberOfCases = styled.div`
margin-left:10px;
margin-top:5px;
font-size:13px;
color:#777777;
font-family:"Tahoma",sans-serif
`
export const ActivePop = styled.div`
margin-left:10px;
margin-top:5px;
font-size:13px;
color:#777777;
font-family:"Tahoma",sans-serif
`
export const NumberOfDeaths = styled(ActivePop)``

export const NumberOfTests = styled(ActivePop)``

export const NumberofRecoverd = styled(ActivePop)`
margin-bottom:10px;
`
export const MiniChart  = styled.div`
width:90%;
height:280px;
padding-left:10px;
margin-bottom:10px;
`
export const Pop = styled(ActivePop)``

export const Critical = styled(ActivePop)``