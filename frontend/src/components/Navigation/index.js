import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import './Navigation.css';
import fauxbnb_icon from '../../assets/fauxbnb_icon.png'


function Navigation ({isLoaded}) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
            <div className='auths'>
            <NavLink to='/login'> Log In</NavLink>
            <NavLink to='/signup'> Sign Up </NavLink>
            </div>
            </>
        );
    }

    return (
     <div className='navContainer'>
        <ul>
            <li>
            <NavLink className="home" to="/"> 
            <a href='' className="fauxbnb_icon"><img className='fauxbnb_icon' src={fauxbnb_icon} alt='doghouse' /> 
            <div className="fauxbnb_logo">fauxbnb</div>
            </a>
           
            </NavLink>
            {isLoaded && sessionLinks}
            </li>
        </ul>
    </div>
    )

}

export default Navigation;