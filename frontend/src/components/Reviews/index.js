import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { deleteReview, getReviews, createReview} from '../../store/reviews'

import './Reviews.css'

const Reviews = () => {

const dispatch = useDispatch()

const [content, setContent] = useState('')
const [reservationId, setReservationId] = useState('')


const images = useSelector((state) => state.images);
const imageObjects = Object.values(images)

const reviews = useSelector((state) => state.reviews); 
const reviewObjects = Object.values(reviews)
useEffect(() => {
    dispatch(getReviews());
}, [dispatch]);



const handleSubmit = (e) => {
    e.preventDefault();
    
      return dispatch(createReview({ reservationId, content })).catch(
    
      );
    }
   

    return (

    <div>
      {}

        <form className='createReview' onSubmit={handleSubmit}>
        <input
        className="reservationIdInput"
        placeholder="reservationId"
        type="integer"
        value={reservationId}
        onChange={(e) => setReservationId(e.target.value)}
        required
      />
      <input
        className="contentInput"
        placeholder="Content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">add review</button>
        </form>
        {reviewObjects.map(review => (
            <div>
                {review.content}
                <button
                className='deleteReview'
                onClick={()=>
                    
                dispatch(deleteReview(review.id))
            
            }
                >delete</button>
            </div>
        ))}
       
         
      

    </div>

    
)
    
        }

export default Reviews