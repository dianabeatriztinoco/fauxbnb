// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './ProfileButton.css'


function ProfileButton({ user }) {

  
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      {/* <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      */}
        <ul className="profile-dropdown">
          {/* <li>{user.username}</li> */}
          <li></li>
          <li>
            <NavLink to='/'>
              <button className='logOutButton'  onClick={logout}>Log Out</button>
              </NavLink>
          </li>
        </ul>
     
    </>
  );
}

export default ProfileButton;