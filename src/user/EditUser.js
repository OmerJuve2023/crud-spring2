import React, {useEffect, useState} from "react";
import {useNavigate, Link, useParams} from "react-router-dom";

const EditUser = () => {
    const {empid} = useParams();
    useEffect(() => {
        fetch("http://localhost:3004/user/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            usernamechange(resp.username);
            emailchange(resp.email);
            console.log(empid)
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [username, usernamechange] = useState("");
    const [email, emailchange] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = {id, username, name, email};

        fetch("http://localhost:3004/user/" + empid, {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div className={"container"}>
            <div><br/></div>
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"}>
                    <h2 className={"text-center m-4"}>Edit User</h2>
                    <form onSubmit={handlesubmit}>
                        <div className={"mb-3"}>
                            <label htmlFor="Name" className={"form-label"}>Name</label>
                            <input type="text"
                                   className={"form-control"}
                                   placeholder={"Enter your name"}
                                   name={"name"}
                                   value={name}
                                   onChange={(e) => namechange(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Last Name" className={"form-label"}>Last Name</label>
                            <input type="text"
                                   className={"form-control"}
                                   placeholder={"Enter your last name"}
                                   name={"username"}
                                   value={username}
                                   onChange={(e) => usernamechange(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className={"form-label"}>Email</label>
                            <input type="email"
                                   className={"form-control"}
                                   placeholder={"Enter your e-mail address"}
                                   name={"email"}
                                   value={email}
                                   onChange={(e) => emailchange(e.target.value)}/>
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
export default EditUser;