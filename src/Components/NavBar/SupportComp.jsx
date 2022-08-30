


const SupportComp = () => {
    return <div style={{
        height:"max-content",
        width:"calc(100% - 40px)",
        backgroundColor:"#000",
        color:"#fff",
        display:"flex",
        flexFlow:"column noWrap",
        padding:"20px"
    }}>
        <div style={{
            height:"max-content",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginBottom:"20px",
            fontSize:"38px",
            textAlign:"center",
            borderBottom:"1px solid #414040",
            paddingBottom:"10px",
            fontFamily:"Tahoma,'sans-serif'"

        }}>
            Welcome, Support Ukraine. Lives are at stake.
        </div>
        <div style={{
            height:"max-content",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            fontFamily:"Tahoma,'sans-serif'",
            fontSize:"12px",
            color:"#8d8d8d"
        }}>
            If some parts of website is not working, its may be due Api mal function. This app built 
            upon the Open Source Apis. OSAs are unreliable.
        </div>
    </div>
}

export default SupportComp