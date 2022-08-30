import styled from "styled-components"

export const WorldDataContainer = styled.div`

width:500px;
min-height:100px;
height:max-content;
display:flex;
justify-content:center;
flex-flow: row wrap;
`

export const WorldHeading = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:18px;
    color:#8a8585;
    margin-bottom:10px;
    margin-top:25px;
    align-self:center;
    font-family:"Tahoma",sans-serif;
    
`
export const StaticsInfoDiv = styled.div`
width:180px;
margin:20px;
margin-top:10px;
height:max-content;
min-height:100px;
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
transition:transform 0.4s linear;
&:hover{
    transform:scale(1.05)
}
@media(max-width:500px){
    width:120px;

}
`
export const StaticsContainer = styled.div`
display:flex;
width:100%;
height:max-content;
justify-content:center;
flex-flow: row wrap;
`
export const CardHeadings = styled.h5`
margin:10px;
font-family:"Tahoma",sans-serif;
font-size:14px;
color:#aba7a7;

`
export const CardHeadings2 = styled.h6`
margin:10px;
margin-bottom:5px;
font-family:"Tahoma",sans-serif;
font-size:14px;
color:#aba7a7;
`
export const WorldDataContainerGraph = styled.div`
`

export const ChartContainer=styled.div`
width:100%;
height:max-content;
display:flex;
flex-flow:row wrap;
justify-content:center
`
export const LineChartStaticsStyles = styled.div`
width:100%;
min-height:300px;
height:max-content;
display:flex;
align-items:center;
justify-content:center;
margin:20px;
@media (max-width:700px){
    margin:0px;
    margin-bottom:20px;
    margin-top:20px
}
`
export const LineChartDiver = styled.div`
width:45%;
height:100%;
display:flex;
flex-flow:row nowrap;
justify-content:space-around;
align-items:center;
margin:20px;

@media (max-width:1200px){
    flex-flow:column nowrap;
    width:65%;
}
@media (max-width:900px){
    width:85%;
}
@media (max-width:700px){
    width:95%;
    margin:0px;
}
&>canvas{
    background-color: #f2f2f2
}
`

export const BarAndLineChartDiver = styled.div`
width:100%;
height:max-content;
display:flex;
justify-content:center;
align-items:center;
flex-flow:row nowrap;
@media (max-width:1200px){
    flex-flow:column nowrap;
}
`

export const ContainerOFRecovery = styled.div`
width:600px;
background-color: #f2f2f2;
@media (max-width:600px) {
    width: 100%;
}
`

export const UpdatedTime = styled.div`
width:100%;
height:50px;
display:flex;
justify-content:center;
align-items:center;
font-family:"Tahoma",sans-serif;
font-size:12px;
color:#aba7a7;
`

export const ParentPieChartContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
min-height:300px;
flex-flow:row wrap;
height:max-content;
margin-bottom:20px;

`
export const ActualContainer = styled.div`
width:400px;
height:300px;
margin:10px;
background-color: #f2f2f2;
padding-top:10px;
padding-bottom:10px;
@media(max-width:500px){
    width:100%;
}
`

export const BarChartParentContainer = styled.div`
width:100%;
height:500px;
height:max-content;
display:flex;
justify-content:center;
align-items:center;
flex-flow: row wrap;
@media(max-width:1200px){
    width:100%;
    flex-flow:column wrap;
}
`
export const ActualBarChartContainer = styled.div`
width:45%;
margin-right:20px;
background-color: #f2f2f2;
@media(max-width:1200px){
    width:88%;
    margin-right:0px;
    margin-bottom:20px;
}
@media(max-width:400px){
    width:95%
}
`
export const TableContainer = styled.div`
width:100%;
height:max-content;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:50px;

&>table{
    width:80%;
    border-collapse: collapse;
    border: 1px solid #6666 !important;
    border-spacing:0;
}
& td,th{
    border: 1px solid #6666 !important;
    font-family:"Tahoma",sans-serif;
    height:40px;
    
}

& tbody > tr :nth-child(3){
    background-color:#c2e4ef;
}
& tbody > tr :nth-child(4){
    background-color:#111111;
}
& tbody > tr :nth-child(5){
    background-color:#d2f9d1;
}
& tbody > tr :nth-child(6){
    background-color:#c2e4ef;
}
& tbody > tr :nth-child(7){
    background-color:#111111;
}

& tbody > tr:hover{
    transform:scale(1.01);
    background-color:#eeee
}

& tbody > tr > td:hover:nth-child(3),
& tbody > tr > td:hover:nth-child(6)
{
    color:#ff2e2e;
}
& tbody > tr > td:hover:nth-child(4),
& tbody > tr > td:hover:nth-child(7){
    color:#fff;
}
& tbody > tr > td:hover:nth-child(5){
    color:#00b900;
}
& th {
    font-family:"Tahoma",sans-serif;
    font-size:14px;
    color:#666;
}
& td {
    color:#888;
    padding:10px;
}
@media (max-width:560px){
    & table{
        width:100%;
    }
    & th{
        font-size:12px;
    }
    & td{
        font-size:10px;
        padding:5px;
    }
}
@media (max-width:480px){
    & thead>tr :nth-child(7){
        display:none;
    }
    & tbody>tr :nth-child(7){ 
        display:none;
    }
}

@media (max-width:360px){
    & table{
        width:90%;
    }
    & thead>tr :nth-child(1){
        display:none
    }
    & thead>tr :nth-child(6){
        display:none;
    }
    & tbody>tr :nth-child(6){
        display:none;
    }
    & tbody>tr :nth-child(1){
        display:none;
    }
    & th {
        font-size:10px;
    }
    & tbody>tr :nth-child(2){
        padding:0px;
        width:80px;
    }
}
`