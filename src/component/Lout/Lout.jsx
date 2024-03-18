const Lout =({txt1,txt2,size1=14,size2=14,color="white"})=>{
    return <div style={{marginBottom:50,}}>
<div style={{
    fontSize:size1,
    color:color,
}}>{txt1}</div>
    <div style={{fontSize:size2,
                 color:"white",
                                }}>{txt2}</div>
    </div>
}
export default Lout;