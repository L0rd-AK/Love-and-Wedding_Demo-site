import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const {user,logOut,name,pic,toogle}=useContext(AuthContext);
    const customLinks = <>
        <li className="text-lg"><NavLink to="/">Home</NavLink></li>
        <li className="text-lg"><NavLink to="/about-us">Contact Us</NavLink></li>
        <li className="text-lg"><NavLink to="/services">Services</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow  rounded-box w-52 text-black">
        {customLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl hidden lg:flex">
        <img src='https://i.ibb.co/71jTqkM/veil-logo.webp' alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-5 px-1 text-black font-semibold">
        {customLinks}
    </ul>
  </div>
  <div className="navbar-end ">
    {
      toogle ?
      user ? 
      <div className="flex gap-4 items-center">
        <p className="text-black -ml-20">{name}</p>
        <img className="rounded-full h-10" src={pic} alt="" />
        <Link to='/' onClick={()=>logOut()}><a className="btn btn-ghost bg-[#FCB41E] text-white mr-5">Log Out</a></Link>
      </div>:
      <Link to='/login'><a className="btn btn-ghost bg-[#FCB41E] text-white mr-5 text-sm md:text-lg">Login</a></Link>:
      user ? 
      <div className="flex gap-4 items-center">
        <p className="text-black -ml-20">{user.displayName}</p>
        <img className="rounded-full h-10" src={user.photoURL} alt="" />
        <Link to='/' onClick={()=>logOut()}><a className="btn btn-ghost bg-[#FCB41E] text-white mr-5">Log Out</a></Link>
      </div>:
      <Link to='/login'><a className="btn btn-ghost bg-[#FCB41E] text-white mr-5 text-sm md:text-lg">Login</a></Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;