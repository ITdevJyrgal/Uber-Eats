import React from "react";
import Image from "../../assets/img/white-logo.svg";
import '../../styles/footer/footer.scss'
import img from "../../assets/img/glo.svg"
import Comb from "../../assets/img/Combined Shape.svg"
import App from "../../assets/img/app.svg"
import Google from "../../assets/img/google.svg"
import Ste from "../../assets/img/stre.svg"

const Footer = () => {
    return (
        <div className="bac">

            <div className="container mt-5">

                <div>
                    <img src={Image} alt="img" className="mt-5 mb-3"/>
                    <div className="bac-width"> </div>
                </div>
                <div className="d-flex justify-content-around">
                    <span>
                    <div>
                <img src={img} alt="" className="bac-img"/>
                <select className="bac-select">
                    <option>Русский</option>
                    <option>English</option>
                    <option>Кыргызский</option>
                </select>

            </div>
                    <div>
                <h1 className="bac-uber"><span className="bac-uber2">#</span>UberEats</h1>
                <div>
                   <a href="https://www.instagram.com/motion_web/"> <img src={Comb} alt="" className="bac-ins"/></a>
                 <a href="https://www.instagram.com/motion_web/">   <img src={Comb} alt="" className="bac-ins"/></a>
                   <a href="https://www.instagram.com/motion_web/"> <img src={Comb} alt="" className="bac-ins"/></a>
                </div>
            </div>
                </span>
                    <span>
                    <div>
                        <h1 className="bac-text">Об UberEats</h1>
                        <h1 className="bac-text">Станьте партнёром по доставке</h1>
                        <h1 className="bac-text">Станьте парнёром-рестораном</h1>
                    </div>
                </span>
                    <span>
                    <div>
                        <h1 className="bac-text">Все города</h1>
                        <h1 className="bac-text">Цены</h1>
                        <h1 className="bac-text">Помощь</h1>
                        <h1 className="bac-text">FAQs</h1>
                    </div>
                </span>
                </div>
                <div className="bac-width2"> </div>
                <div className="text-center">
                    <img src={App} alt="img" className="bac-app"/>
                    <img src={Google} alt="img" className="bac-app"/>
                </div>

                <div className="bac-width3"> </div>
                <div className="d-flex align-items-center justify-content-between">
                    <span><h1 className="bac-inc">© 2017 Uber Technologies Inc.</h1></span>
                    <span><h1 className="bac-inc">Обработка персональных данных</h1></span>
                    <span><h1 className="bac-inc">Пользовательское соглашение</h1></span>
                    <a href="#">
                        <div className="bac-square">
                            <img src={Ste} alt="img" className="bac-ste"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Footer