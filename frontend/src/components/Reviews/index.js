import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { deleteReview, getReviews, createReview, getReview} from '../../store/reviews'
import { useParams } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { NavLink } from "react-router-dom";
import './Reviews.css'


const Reviews = () => {
const dispatch = useDispatch()
const { id } = useParams()
const idNum = parseInt(id)


const [userId, setUserId] = useState()
const [stayId, setStayId] = useState()
const [content, setContent] = useState('')




const stays = useSelector((state => state.stays))
const stayObjects = Object.values(stays)
const images = useSelector((state) => state.images);

// const imageObjects = Object.values(images)

const reviews = useSelector((state) => state.reviews) 
// const {userId, stayId, content} = reviews

const reviewObjects = Object.values(reviews)

// reviewObjects.forEach((review)=> {
 
// })


useEffect(() => {
    dispatch(getReview());
}, [dispatch]);



const handleSubmit = (e) => {
    e.preventDefault();
 
 
  return dispatch(createReview({ userId, stayId, content }))

 
    
    
    }
   
    return (
      <>
      {reviewObjects.map(review => (
     
        <>
        {review.id === idNum && (
          <>
          <div>
          {review.content}
          </div>
       
        <NavLink to={`/stays/${stay.id}`}> <button
                className='deleteReview'

                onClick={()=>{dispatch(deleteReview(review.id)) }}

               >delete

               </button></NavLink>




       {/* <form className='createReview' onSubmit={handleSubmit}>
         <input
    
        className="userIdInput"
        placeholder="userId"
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
       <input
        className="stayIdInput"
        placeholder="stayId"
        type="text"
        value={stayId}
        onChange={(e) => setStayId(e.target.value)}
        required
      />
      <textarea
        className="contentInput"
        placeholder="Content"
        type="textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
          
        <button type="submit" className='createNewReview'
           >add new review
           
           </button>
           
               {/* { <NavLink to={`/reviews/${review.id}`}><button
                className='createNewReview'
                onClick={() => (
                    
                dispatch(createReview(userId, stayId, content))
                
                )
            }
               >create</button></NavLink> } */
        // {/* // </form>  */} */
        
        }
        
        </>
        
          
          
        )}
        </>
      ))}
      </>
    )

//     return (

//     <div>
//       {}

//         <form className='createReview' onSubmit={handleSubmit}>
//         <input
//         className="reservationIdInput"
//         placeholder="reservationId"
//         type="integer"
//         value={stayId}
//         onChange={(e) => setReservationId(e.target.value)}
//         required
//       />
//       <input
//         className="contentInput"
//         placeholder="Content"
//         type="text"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         required
//       />
//       <button type="submit">add review</button>
//         </form>
//         {reviewObjects.map(review => (
//             <div>
//                 {review.content}
//                 <button
//                 className='deleteReview'
//                 onClick={()=>
                    
//                 dispatch(deleteReview(review.id))
            
//             }
//                 >delete</button>
//             </div>
//         ))}
       
         
      

//     </div>

    
// )
    
        }

 export default Reviews