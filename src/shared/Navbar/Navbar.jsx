import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar sticky top-0  z-10">
            <div className="navbar-end w-full ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content right-2 mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        <li><NavLink>Features</NavLink></li>
                        <li><NavLink>Pricing</NavLink></li>
                        <li><NavLink>SignUp</NavLink></li>
                    </ul>
                </div>
                <div className="navbar hidden lg:flex lg:mx-16">
                    <ul className="menu menu-horizontal gap-3">
                        <li><Link to=''>Features</Link></li>
                        <li><Link to=''>Pricing</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;