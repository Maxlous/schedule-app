import login from "../assets/login.jpg"
import { useState } from "react"
import { RiLoginCircleLine } from "react-icons/ri"
import { useHistory } from "react-router-dom"

const Login = () => {

    const [userName, setUserName] = useState("");
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", JSON.stringify(userName));
        history.push("/dashboard")
    }

    const handleNameInput = (e) => {
        setUserName(val => e.target.value)
        console.log(userName)
    }

    return (
        <div className="card" style={{ width: "30rem" }}>
            <img src={login} className="card-img-top" alt="lock hanging in fence" />
            <div className="card-body">
                <h5 className="card-title text-center">Identify Yourself!</h5>
                <div className="input-group mb-3 mt-4">
                    <span className="input-group-text" id="basic-addon1"><RiLoginCircleLine /></span>
                    <input type="text" onChange={handleNameInput} className="form-control" placeholder="Name & Surname" aria-label="Username" aria-describedby="basic-addon1" />
                    <button onClick={handleSubmit} type="submit" className="btn btn-dark">Let's Go!</button>
                </div>
            </div>
        </div>

    )
}

export default Login
