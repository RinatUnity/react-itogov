import F1 from "../../assets/image/F1.png";
import F2 from "../../assets/image/F2.png";
import F3 from "../../assets/image/F3.png";
import F4 from "../../assets/image/F4.png";
import F5 from "../../assets/image/F5.png";
import F6 from "../../assets/image/F6.png";
const Cart = ({caption,txt,pic}) =>{
    
    return <div style={{
        display:"grid",
        width:350,
        height:300,
        boxShadow:"0px 0px 5px 5px #9E9E9E",
        borderRadius:10,
        backgroundColor:"#0E9E9E",
        padding:20,
        textAlign:"left",

    }}>
        <div style={{
            marginTop:30,
        }}>
            <img src={pic} alt="" />
        </div>
        <div style={{
            fontSize:20,
        }}>{caption}</div>
        <div className="cart_txt">{txt}</div>
    </div>
}
export default Cart;