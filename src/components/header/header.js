import React from "react";
import "../../styles/Header/header.scss"
import Image from "../../assets/img/white-logo.svg";
import img from '../../assets/img/basket.svg'
import '../../styles/Header/header-media.scss'

const Header = () => {
    return (

        <div className="d-flex align-items-center justify-content-between general">
            <div className="general-img">
                <a href="#">
                    <img src={Image} alt="Image" className="img"/>
                </a>
            </div>
            <div className="general-gen">
                <button className="general-btn">Войти</button>
                <img src={img} alt="img" className="general-kor"/>
            </div>
        </div>
    )
}

export default Header