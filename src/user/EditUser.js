import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link, useParams} from "react-router-dom";

export default function EditUser() {
    let navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });
    const {name, username, email} = user;
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        let a = "http://localhost:3004/user/" + id;
        console.log(a);
        await axios.put(a, user);
        navigate("/");
    };

    const loadUser = async () => {
        let a = "http://localhost:3004/user/" + id;
        console.log(a);
        const result = await axios.get(a);
        setUser(result.data);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className={"container"}>
            <div><br/></div>
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}>
                    <h2 className={"text-center m-4"}>Register User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className={"mb-3"}>
                            <label htmlFor="Name" className={"form-label"}>Name</label>
                            <input type="text"
                                   className={"form-control"}
                                   placeholder={"Enter your name"}
                                   name={"name"}
                                   value={name}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Last Name" className={"form-label"}>Last Name</label>
                            <input type="text"
                                   className={"form-control"}
                                   placeholder={"Enter your last name"}
                                   name={"username"}
                                   value={username}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className={"form-label"}>Email</label>
                            <input type="email"
                                   className={"form-control"}
                                   placeholder={"Enter your e-mail address"}
                                   name={"email"}
                                   value={email}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type={"submit"}
                                className={"btn btn-outline-primary"}>Submit
                        </button>
                        <Link to={"/"}
                              className={"btn btn-outline-danger mx-3"}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}