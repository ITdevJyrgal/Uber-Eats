import React, {useState} from "react";
import "../../styles/Header/header.scss"
import Image from "../../assets/img/white-logo.svg";
import img from '../../assets/img/basket.svg'
import '../../styles/Header/header-media.scss'
import About from "../../companents2/about/about";
import {Modal} from "react-bootstrap";

const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="d-flex align-items-center justify-content-between general">
            <div className="general-img">
                <a href="#">
                    <img src={Image} alt="Image" className="img"/>
                </a>
            </div>
            <div className="general-gen">
                <button className="general-btn" onClick={() => setShow(!show)}>Войти</button>
                <img src={img} alt="img" className="general-kor"/>


                <Modal show={show}>
                    <Modal.Header closeButton onClick={() => setShow(!show)}>
                        <Modal.Title>Gmail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><input type="text" placeholder="@" className="about-input"/></Modal.Body>
                    <Modal.Footer>
                        <button className="general-close" onClick={() => setShow(!show)}>
                            Закрыть
                        </button>
                        <button className="general-close2" onClick={() => setShow(!show)}>
                            Сохранить
                        </button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>


    )
}

export default Header