import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { getStays } from "../../store/stays"
import { deleteReview, getReviews, createReview} from '../../store/reviews'
import { useParams } from 'react-router-dom'
import "./Stays.css";
import * as sessionActions from '../../store/session';

const Stays = () => {
    const dispatch = useDispatch()
    const { id } = useParams(); 
    const idNum = parseInt(id)
  
 
    
    const images = useSelector(state => state.images)
    const imageObjects = Object.values(images);
   
    
    const stays = useSelector(state => state.stays)
    const stayObjects = Object.values(stays);

    const reviews = useSelector(state => state.reviews)
    const reviewObjects = Object.values(reviews)

    useEffect(() => {
    dispatch(getImages());
    dispatch(getStays());
    dispatch(getReviews())
  }, [dispatch]);


    return (
        <div>
            <div className="stayIdImage">
            {imageObjects.map(image => ( 
                <div>
                    
                  { image.stayId === idNum && (
                    <div>
                      <div>
                         <img className='image' alt={image.url} src={image.url} />
                      </div>
                      </div>
                  )}

                </div>
            ))}
            </div>

            <div className="stayIdDetails">
            {stayObjects.map(stay => ( 
                  <div> {stay.id === idNum && (
                      <div>
                    <div>
                    <div>{stay.address}</div>
                    <div>{stay.city}</div>
                    <div>{stay.state}</div>
                    <div>{stay.country}</div>
                    <div>{stay.price}</div>
                    <div>{stay.description}</div>
                    </div>

                    <div>
                      <button>BOOK NOW!</button>
                      </div>


                      <div>

                          </div> 
                      </div>

                    
                  )}



                </div>
            ))}
            </div>

        </div>

     
    )

}

export default Stays