import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import * as sessionActions from "../../store/session";
import reviewReducer, { deleteReview, getReviews, createReview, getReview} from '../../store/reviews'
import { getStays } from '../../store/stays';
import { getImages } from '../../store/images';
import './ReviewForm.css'
import Images from '../Image';



const ReviewForm = () => {
const { id } = useParams()
const idNum = parseInt(id)


    const dispatch = useDispatch()

    const user = useSelector((state) => state.session)
    const actionUserId = user.user.id
    console.log(user)
    
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState(actionUserId)
    const [stayId, setStayId] = useState(idNum)
    
    useEffect(()=>{
        dispatch(getImages())
        dispatch(getStays())
    }, [dispatch])


   const stay = useSelector(state => state.stays)
   const stayObjects = Object.values(stay)
  

   const images = useSelector(state => state.stays)
   const imageObjects = Object.values(images)

    const handleSubmit = (e) => {

        e.preventDefault();
     
      
      return dispatch(createReview({ userId, stayId, content }))
    
    }    

    return (

        <>
        <div>
            
            {imageObjects.forEach((image) => {

                {image.id === actionUserId && (


                    <div className='hello'>{image.url}</div>
                )}
            })}

        </div>

        <form onSubmit={handleSubmit}>
            
            <textarea className='review' 
               onChange={(e) => setContent(e.target.value)} 
             
            >
            </textarea>
            {/* {imageObjects.forEach(())} */}
            <NavLink to={`/stays/{${idNum}}`}>
            <button type='submit'>submit review</button>
            </NavLink>
        </form>

        
        </>
        
    )
}

export default ReviewForm;