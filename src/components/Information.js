import { FcPortraitMode } from "react-icons/fc"
import { useState } from "react";

const Information = () => {

    const [nameInfo, setNameInfo] = useState(() => {
        const info = localStorage.getItem("userName");
        return info ? JSON.parse(info) : "No Name"
    })

    return (
        <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <FcPortraitMode size="10em" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nameInfo}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
