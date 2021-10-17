import React from 'react'
import './LandingPage.css'
import Images from '../Image'




const LandingPage = () => {
    
    return (
      
       <div>
        <div id='showcase'>
        <div className='formOuterContainer'>
        <form className="formContainer">
        <div className="locationContainer">
        <label>location </label>
        <input className="noOutline" placeholder="Nearby"></input>
        </div>
        <div className='check-inContainer'>
        <label>check-in</label>
        <input className="noOutline" placeholder="Add Date"></input>
        </div>
        <div className='check-outContainer'>
        <label>check-out</label>
        <input className="noOutline" placeholder="Add Date"></input>
        </div>
        </form>
        </div>
        </div> 
        
        <div className="textOne"> 
            Some pawsitive reviews guest are saying about our stays !!
        </div>
        <div className='textTwo'> 
            Over <strong>700,000 guest reviews</strong> wiht an average of <strong>4.8 out of 5 paws</strong> 
        </div>
        <div className="stayImages">
            <Images />
        </div>
        </div>
      
      
    )
}

export default LandingPage 