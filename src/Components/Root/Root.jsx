import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";


const Root = () => {
    return (
        <div className="lg:mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;