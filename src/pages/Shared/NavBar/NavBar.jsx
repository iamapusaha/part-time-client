import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const MySwal = withReactContent(Swal)
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add-jobs'>Add Job</Link></li>
        <li><Link to='/my-posted-jobs'>My posted jobs</Link></li>
        <li><Link to='/my-bids'>My Bids</Link></li>
        <li><Link to='/bid-request'>Bid Request</Link></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                MySwal.fire(
                    'Good job!',
                    'sussfully loaged out!',
                    'success'
                )
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Part Time</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end z-30">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">{user.displayName}</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><Link onClick={handleLogOut}>logout</Link></li>
                            </ul>
                        </div>
                    </>
                        : <Link to='/signin'><button className="btn">SignIn</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;