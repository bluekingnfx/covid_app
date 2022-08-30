import styled from "styled-components"


export const Nav = styled.nav`
width:100%;
height:70px;
display:flex;
position:relative;
flex-flow:row wrap;
background-color: rgb(0, 128, 255,0.7)
`
export const Title = styled.h1`
font-family:"Tahoma",sans-serif;
font-size:22px;
color:#fff;
margin:20px;
margin-left:10px;
`

export const Selection = styled.div`
display:flex;
flex-flow:column nowrap;
width:100%;
height:100px;
background-color:rgb(0,0,0,0.1);
`

export const Name = styled.div`
font-family: "Tahoma",sans-serif;
margin-left:10px;
font-size:16px;
color:#fff
`
export const ImgFlag = styled.img`
width:30px;
height:30px;
border-radius:50%;
`

export const SelCon = styled.h2`
font-family:"Tahoma",sans-serif;
font-size:16px;
color:#6666;
margin:0;
margin-top:20px;
margin-left:20px;
margin-bottom:5px;
`
export const SumbmergeBar = styled.div`
width:50px;
height:40px;
position:relative;
background-color:#4ba6ffb3;
box-shadow: 0px 0px 5px 0px #dcdcdc;
display:${({Val})=>Val===false ? "flex" : "block" };
flex-flow:column nowrap;
align-items:center;
justify-content:center;
margin:14px 0px 0 10px;
border-radius:5px;
transition:background-color 0.1s linear;
&:hover{
    background-color:#f8f6f64a;
}
`
export const ThreeBar1 = styled.div`
width:25px;
height:3px;
border-radius:3px;
background-color:#fcfeff;
margin-bottom:4px;
display:${({Val})=> Val === true ? "none" : "block"}
`
export const ThreeBar2 = styled.div`
display:flex;
width:25px;
height:3px;
border-radius:3px;
background-color:#fcfeff;
margin-bottom:4px;
position: ${({Val})=>Val === true ? "absolute" : "unset"};
bottom:13px;
left:12px;
transform:${({Val})=>Val === true ? "rotate(130deg)" : "unset"}
`

export const ThreeBar3 = styled.div`
display:block;
width:25px;
height:3px;
border-radius:3px;
background-color:#fcfeff;
margin-bottom:4px;
position: ${({Val})=>Val === true ? "absolute" : "unset"};
top:20px;
right:13px;
transform:${({Val})=>Val === true ? "rotate(-135deg)" : "unset"}
`

export const SideNavBarParent = styled.div`
position:absolute;
width:100%;
top:70px;
height:calc(100vh - 70px);
display:${({Val}) => Val === false ? "none" : "block"};
left:0;
background-color:rgb(0,0,0,0.4)
`
export const SideNewsBar = styled.div`
display:flex;
width:800px;
height:100%;
justify-content:center;
align-items:center;
@media(max-width:800px){
    width:100%;
}
& ::-webkit-scrollbar{
    width:15px;
}
& ::-webkit-scrollbar-track {
    border-left:1px solid rgba(256,256,256,0.28);
}
& ::-webkit-scrollbar-thumb{
    background-color:rgba(256,256,256,0.15);
}
& ::-webkit-scrollbar-thumb:hover{
    background-color:rgba(256,256,256,0.2);
}
`