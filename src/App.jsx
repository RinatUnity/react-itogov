import pic1 from "../src/assets/image/logo_EdSpase.png"
import pic2 from "../src/assets/image/иллюстрация_1.png";
import Cart from "./component/Cart/Cart";
import pic3 from "../src/assets/image/Group 17.png";
import pic4 from "../src/assets/image/Frame.png";
import data from "./assets/data/data.json";
import F1 from "./assets/image/F1.png";
import F2 from "./assets/image/F2.png";
import F3 from "./assets/image/F3.png";
import F4 from "./assets/image/F4.png";
import F5 from "./assets/image/F5.png";
import F6 from "./assets/image/F6.png";
import P from "./assets/image/иллюстрация_2.png";
import Cart2 from "./component/Cart2/Cart2";
import ris from "./assets/image/ok-circle.png";
import Lout from "./component/Lout/Lout";
import Modal from "./component/Modal/Modal";
import { useState } from "react";
const App = ()=>{
    const [openModal,setOpenModal] = useState(false);
    const arr = [F1,F2,F3,F4,F5,F6];
    const Butt =()=>{
        return<div style={{margin:20,}}>
            <button onClick={(e)=>setOpenModal(true)} className="button_green">попробовать бесплатно</button>
        </div>
    }
    // eslint-disable-next-line no-lone-blocks
    
    const Nav = ()=>{

        return <div key={"104"} className="top_panel">
            <div className="top_image">
                <img src={pic1} alt="logo" />
            </div>
            <nav className="top_nav">
               <h3>Возможности</h3>
               <h3>Стоимость</h3>
               <h3>Контакты</h3>
            </nav>
        </div>
    }
    return <div>
        <Nav/>
        <article>
            <section className="block1">
                <div className="block1_content">
                   <div className="block1_caption">Ed Space Ваши знания и экспертность обретут здесь форму</div>
                   <div className="block1_text">Мощный инструмент для организации обучения. Ваши ученики будут в восторге!</div>
                   <Butt></Butt>
                </div>
                <div>
                    <img src={pic2} alt="" />
                </div>
            </section>
            <section className="block2">
               <div className="block2_conteint">
                <div className="block2_caption">Точно подойдет для:</div>
                    <div className="block2_kart">
                        <div>
                            <img src={pic3} alt="" />
                        </div>
                        <div className="block2_cap">Организации онлайн-курсов</div>
                        <div className="block2_text">Cоздайте свою программу обучения с нуля, самостоятельно управляйте учебным процессом в несколько кликов, круглосуточная поддержка.</div>
                    </div>
                    <div className="block2_kart">
                        <div className="block2_im">
                            <img src={pic4} alt="" />
                        </div>
                        <div className="block2_cap">Создания корпоративного
обучения</div>
                        <div className="block2_text">Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.</div>
                    </div>
                    <div style={{position:"absolute",top:380,left:700,}}>
                        <Butt></Butt>
                    </div>
               </div>             
            </section>
            <section className="block3">
                <div className="block3_caption">Возможности Ed Space</div>
                <div className="block3_text">Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.</div>
                <div className="block3_content">
                    {data.obj.map((index,item)=><Cart key={item} caption={index.caption} txt={index.text} pic={arr[item]}></Cart>)}
                </div>
                <div>
                <Butt></Butt>
                 </div>
            </section>
            <section className="block4">
                <div className="block4_caption">Выбирайте Ed Space сегодня и вы получите</div>
                <div className="block4_cartblock">
                    <div className="content_cart">
                    {data.text.map((index,item)=><Cart2 key={item} txt={index} pic={ris} ></Cart2>)}
                    </div>
                    <div className="block4_bootom">
                    <Lout txt1={"Запустите свою онлайн-школу"} 
                          txt2={"Или разверните корпоративный учебный портал уже сегодня."}
                          size1={25}   
                            ></Lout>
                     <Lout txt1={"Цена 250 рублей за 1 ученика в месяц"}
                           txt2={"Все готово для запуска. Попробуйте 7-дневный демо-доступ."} 
                            size1={20} color={"green"}
                     ></Lout> 
                     <Butt></Butt>
                     <Lout
                        txt1={"Точно подойдет для:"}
                        txt2={""}
                        size1={30}
                     ></Lout> 
                     <Lout txt1={"Любых онлайн-школ"}
                           txt2={"Быстрый запуск, легкое управление, все инструменты в одной платформе."}
                           size1={18} color={"green"}     
                     ></Lout>
                     <Lout txt1={"Образовательных курсов"}
                            txt2={"Статистика по всем образовательным процессам позволяет постоянно улучшать ваш продукт."}
                            size1={18} color={"green"}  
                     ></Lout>    
                     <Lout txt1={"Корпоративных учебных порталов"}
                            txt2={"Надежная защита, бесперебойная работа и высокая производительность системы позволит наслаждаться процессом обучения."}
                            size1={18} color={"green"}  
                     ></Lout>    
                    </div>
                
                <div className="block4_img_bottom">
                    <img src={P} alt="" />
                </div>
                </div>
            </section>
        </article>
        {openModal && <Modal setOpenModal={setOpenModal}></Modal>}
    </div>
}


export default App;