import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="top-0 w-full bg-white shadow-lg flex justify-end rounded-2xl px-10">
            <div className="nav-items">
                <ul className="flex py-5 px-10">
                    {/* <li className="px-5 font-bold hover:bg-green-500 rounded-md py-3">
                        <Link to={"/"}>Home</Link>
                    </li> */}
                    <li className="px-5 font-bold hover:bg-green-500 rounded-md py-3">
                        <Link to={"/form"}>Form</Link>{" "}
                    </li>
                    <li className="px-5 font-bold hover:bg-green-500 rounded-md py-3">
                        <Link to={"/read"}>Read</Link>{" "}
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Nav;
