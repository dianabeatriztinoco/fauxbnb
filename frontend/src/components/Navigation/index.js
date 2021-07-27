import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

import { NavLink } from 'react-router-dom'
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import './Navigation.css';
import fauxbnb_icon from '../../assets/fauxbnb_icon.png'




function Navigation ({isLoaded}) {
    const [demoUser, setDemoUser] = useState(false)

    const dispatch = useDispatch()
    const demo = (e) => {
        e.preventDefault();
        dispatch(sessionActions.loginDemo());
        setDemoUser(true);
      };
    
    const sessionUser = useSelector(state => state.session.user);


    
    let sessionLinks;
    if(sessionUser){
        
        sessionLinks = (
            <>
            <div className="welcome">
            Welcome {sessionUser.email}
            </div>
            <div className="links">
             <NavLink className='stays' to='/stays'> Stays </NavLink>
             <NavLink className='reviews' to='/reviews'> Reviews </NavLink>
             <NavLink className='bookings' to='/bookings'> Bookings </NavLink>
             <ProfileButton className='logOutButton'  />
             </div>
             </>
        );
    } else {
        sessionLinks = (
            <>
            <div className='auths'>
            <NavLink to='/login'> Log In</NavLink>
            <NavLink to='/signup'> Sign Up </NavLink>
            <NavLink to='/stays'> Stays </NavLink>
            <NavLink className='reviews' to='/reviews'> Reviews </NavLink>
             <NavLink className='bookings' to='/bookings'> Bookings </NavLink>
             <NavLink className='demoUser' to='/'><button className='logInDemo' value={demoUser} onClick={demo}>Demo User</button></NavLink>
            </div>
            </>
        );
    }

    return (
     <div className='navContainer'>
        <ul>
            <li>
            <NavLink className="home" to="/"> 
            <img className='fauxbnb_icon' src={fauxbnb_icon} alt='doghouse' /> 
            <div className="fauxbnb_logo">fauxbnb</div>
          
           
            </NavLink>
            {isLoaded && sessionLinks}
            </li>
        </ul>

        
    </div>
    )

}

export default Navigation;