import { logout } from "Redux/Slice/AuthSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {

const dispatch = useDispatch();

const state = useSelector(state=>state.auth);

console.log('state',state);

  function handleLogout(){
    console.log('clicked');
    dispatch(logout())
  }

  return (
    <div>
      <div className="flex justify-between m-8 p-8 border border-white h-[90px]">
      <Link to='/Dashboard'><div className="btn btn-success text-white text-xl sm:text-xs p-2 mr-4">BookShelf</div></Link>
        <div className="flex gap-12 text-white ">
          <div>Shelf</div>
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
