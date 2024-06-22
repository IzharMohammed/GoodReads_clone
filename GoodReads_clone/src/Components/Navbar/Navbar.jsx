import { logout } from "Redux/Slice/AuthSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {

const dispatch = useDispatch();

const state = useSelector(state=>state.auth);


  function handleLogout(){
    dispatch(logout())
  }

  return (
    <div>
      <div className="flex justify-between  m-4 p-8 bg-slate-900 border border-white h-[90px]">
      <Link to='/Dashboard'><div className="btn btn-success text-white text-xl ">BookShelf</div></Link>
        <div className="flex gap-12 text-white ">
          <div><Link to='/shelf'>Shelf</Link></div>
          {
         state.isLoggedIn &&    <div>{state.username}</div>
          }

          <ul>
            <details>
              <summary>options</summary>

          
             {
              state.isLoggedIn &&    <li className="cursor-pointer" onClick={handleLogout}> Logout</li>
             }
             {
              !state.isLoggedIn &&
              <li> <Link to="/SignUp">Sign up</Link> </li>
             }
              {
              !state.isLoggedIn &&
              <li><Link to="/SignIn">sign in</Link></li>
             }
  
            </details>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
