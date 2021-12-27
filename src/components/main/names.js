import React from "react";
import Data from "./Data";
import '../../styles/Main/main.scss'
const Names = () => {
    return (
        <div className="general2">
        <div className="container  mt-5 text-center mb-5 align-items-center d-flex ">
            <div className="row flex-wrap">
                <div className="mb-3">
                    <h3>Рестораны в Москве</h3>
                </div>
                {Data.map((el) => {
                    return (
                        <div className="col-4 mt-5" key={el.id}>
                            <img src={el.image} alt="img"/>
                            <h5>{el.date}</h5>
                            <p>{el.category}</p>
                            <h6>{el.time}</h6>
                        </div>
                    )

                })}
            </div>
        </div>
        </div>
    )
}

export default Names;