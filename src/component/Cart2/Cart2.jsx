// import pic from "../../assets/image/ok-circle.png";


const Cart2 = ({txt,pic}) =>{
    return <div style={{
        backgroundColor:"green",
        border:"solid 2px gray",
        borderRadius:20,
        display:"flex",
        padding:5,
        width:"max-content",
        margin:10,
        }}>
        <div style={{
            fontSize:28,
            
        }}>{txt}</div>
        <div>
            <img src={pic} alt="" /></div>
    </div>
}
export default Cart2;