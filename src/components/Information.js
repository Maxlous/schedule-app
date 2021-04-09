import { useState } from "react";
import { BsPersonSquare } from "react-icons/bs"
import "../styles/Information.css"

const Information = () => {

    const [nameInfo, setNameInfo] = useState(() => {
        const info = localStorage.getItem("userName");
        return info ? JSON.parse(info) : "No Name"
    })

    return (
        <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-self-center justify-content-center">
                    <BsPersonSquare className="m-3" size="9em" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 id="info-card-title" className="card-title">{nameInfo}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
