import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import DeleteUser from "./user/DeleteUser";
import DetailUser from "./user/DetailUser";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route exact path={"/addUser"} element={<AddUser/>}/>
                    <Route exact path={'/editUser/:empid'} element={<EditUser/>}/>
                    <Route exact path={"/detailUser/:empid"} element={<DetailUser/>}/>
                    <Route exact path={"/deleteUser:empid"} element={<DeleteUser/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
