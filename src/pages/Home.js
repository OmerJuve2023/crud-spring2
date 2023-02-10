import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Home() {

    const [user, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/users");
        setUsers(result.data);
        console.log(result);
    }

    return (
        <div className={"container"}>
            <div className={"py-4"}>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope={"cols"}>#</th>
                        <th scope={"cols"}>ID</th>
                        <th scope={"cols"}>Name</th>
                        <th scope={"cols"}>Last Name</th>
                        <th scope={"cols"}>Email</th>
                        <th scope={"cols"}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        user.map((user, index) => (
                            <tr>
                                <th key={index}>{index + 1}</th>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className={"btn btn-success mx-2"}>View</button>
                                    {/* eslint-disable-next-line no-template-curly-in-string */}
                                    <Link to={"/editUser/${user.id}"}
                                          className={"btn btn-primary mx-2"}>Edit</Link>

                                    <button className={"btn btn-danger mx-2"}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}