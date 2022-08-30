import styled from "styled-components";

export const Image = styled.img`
position:absolute;
object-fit:cover;
top:0;
width:100%;
height:100%;
@media(min-width:800px){
    width:800px;
}
`

export const NewsContainer = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:center;
align-items:center;
width:100%;
height:100%;
overflow:auto;
border:0;
z-index:1;
/* margin-bottom: 100px; */
`
export const NewsParent = styled.div`
width:300px;
margin:10px;
height:300px;
border-radius:10px;
border-left:1px solid rgba(256,256,256,0.5);
border-top:1px solid rgba(256,256,256,0.5);
background-color:rgba(256,256,256,0.1);
backdrop-filter:blur(15px);
transition:transform 0.2s linear;
text-rendering:auto;
&:hover{
    transform:scale(1.02)
}
`

export const NewsImgStyle = styled.img`
width:100%;
height:150px;
object-fit:cover;
border-top-left-radius:10px;
border-top-right-radius:10px;
`
export const NewsProviderInfo = styled.div`
width:100%;
height:30px;
display:flex;
flex-flow:row nowrap;
color:white;
justify-content:space-between;
align-items:center;
`

export const ReferenceOfNews = styled.div`
font-size:14px;
text-transform:uppercase;
font-family:"Tahoma",sans-serif;
margin-left:15px;
color:rgb(256,256,256,0.6);
`
export const PubDate = styled.div`
font-size: 14px;
font-family:"Tahoma",sans-serif;
margin-right:15px;
color:rgb(256,256,256,0.7);
`

export const NewsTitleDiv = styled.div`
margin-left:15px;
margin-right:15px;
font-size:20px;
color:rgb(256,256,256,0.9);
width:calc(100% - 30px);
height: 116px;
&:hover{
    color:rgb(256,256,256);
}
`