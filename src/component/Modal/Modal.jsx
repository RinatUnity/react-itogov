import closePic from "../../assets/image/cancel.png";
import pic from "../../assets/image/logo_EdSpase.png";
import { useState } from "react";
const Modal =({setOpenModal})=>{
    const [check,setcheck] = useState(false);
    const [uname,setuname] = useState("");
    const [uorg,setuorg] = useState("");
    const [jobpos,setjobpos] = useState("");
    const [mail,setmail] = useState("");
    const [tel,settel] = useState("");

    function Message(){
        if(check){
            CloseModal();
            const Pers = {
                name: uname,
                uorg: uorg,
                jobpos:jobpos,
                email:mail,
                tel:tel
            }
            console.log(Pers);
        }else{
            alert("Согласитесь с правилами");
        }
    }
    function CloseModal(){
        setOpenModal(false);
        setuname("");
        setuorg("");
        setjobpos("");
        setmail("");
        settel("");
    }

    return <div style={{
        position:"fixed",
        top:0,
        right:0,
        left:0,
        bottom:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(128, 128, 128, 0.481)",
    }}>
        <div style={{
            width:420,
            height:650,
            borderRadius:20,
            boxShadow:"0 0 2px 2px gray",
            backgroundColor:"rgba(128, 128, 128, 0.881)",
            
        }}>
            <div style={{padding:35,
            position:"relative",}}>
                <div onClick={(e)=>CloseModal()} style={{
                    position:"absolute",
                    right:30,
                    top:20,
                }}>
                    <img src={closePic} alt="" />
                </div>
                <div>
                    <img src={pic} alt="" />
                </div>
                
                <div style={{marginTop:20,
                            display:"grid",
                }}>
                    <label for="username">Имя Фамилия</label>
                    <input type="text" id="username" onChange={(e)=>setuname(e.target.value)}></input>
                </div>
                <div style={{marginTop:20,
                            display:"grid",
                }}>
                    <label for="orgname">Название организации</label>
                    <input type="text" id="orgname" onChange={(e)=>setuorg(e.target.value)}></input>
                </div>
                <div style={{marginTop:20,
                            display:"grid",
                }}>
                    <label for="j">Должность</label>
                    <input type="text" id="j" onChange={(e)=>setjobpos(e.target.value)} ></input>
                </div>
                <div style={{marginTop:20,
                            display:"grid",
                }}>
                    <label for="email">Email</label>
                    <input type="email" id="email" onChange={(e)=>setmail(e.target.value)}></input>
                </div>
                <div style={{marginTop:20,
                            display:"grid",
                }}>
                    <label for="tel">Тел.</label>
                    <input type="tel" id="tel" onChange={(e)=>settel(e.target.value)} ></input>
                </div>
                <div style={{marginTop:30,
                }}>
                    <input type="checkbox" onChange={(e)=>!check ? setcheck(true) : setcheck(false) }></input>
                    <div>Я согласен на обработку моих персональных данных</div>
                </div>
                <button onClick={Message} style={{
                    backgroundColor:"green",
                    fontSize:20,
                    borderRadius:20,
                    marginTop:20,
                }}>Отправить</button>
            </div>
        </div>
    </div>
}

export default Modal;

