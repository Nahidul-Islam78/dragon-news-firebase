
import {  Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const { user, LogOut } = use(AuthContext);
  console.log(user)
  //logout user
  const handelLogout = () => {
    LogOut().then(() => {
  alert('are you log out?')
}).catch((error) => {
  console.log(error)
});
  }
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userLogo} alt="" />
        {user ? (
          <button onClick={handelLogout} className="btn btn-primary px-10 ">Logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
