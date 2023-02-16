import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const loadEdit = (id) => {
        navigate("/EditUser/" + id);
    }
    const LoadDetail = (id) => {
        navigate("/detailUser/" + id);
    }

    const RemoveUser = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3004/user/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    useEffect(() => {
        fetch("http://localhost:3004/users").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
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
                        empdata && empdata.map((user, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td key={user.id}>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className={"btn btn-success mx-2"}
                                       onClick={() => {
                                           LoadDetail(user.id)
                                       }}
                                    >View</a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a onClick={() => {
                                        loadEdit(user.id)
                                    }}
                                       className={"btn btn-primary mx-2"}>Edit</a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className={"btn btn-danger mx-2"}
                                       onClick={() => {
                                           RemoveUser(user.id)
                                       }}
                                    >Delete</a>
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
export default Home;