import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { getStays } from "../../store/stays";
import {
  deleteReview,
  getReviews,
  createReview,
  getReview,
} from "../../store/reviews";
import { useParams } from "react-router-dom";
import "./Stays.css";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";

const Stays = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const idNum = parseInt(id);

  const images = useSelector((state) => state.images);
  const imageObjects = Object.values(images);

  const stays = useSelector((state) => state.stays);
  const stayObjects = Object.values(stays);


 

  const reviews = useSelector((state) => state.reviews);
  const reviewObjects = Object.values(reviews);


  
  // if(user.user.id === stays.stays.hostId ){
  //   return true
  // }
  useEffect(() => {
    dispatch(getImages());
    dispatch(getStays());
    dispatch(getReviews());
  }, [dispatch]);

  // useEffect(()=>{
  //   dispatch(getReviews());
  // },[dispatch])

function bookForm(){
  document.getElementById('bookForm').style.display = 'block';
}

function closedBookForm (){
  document.getElementById('bookForm').style.display = 'none';
}

  return (
    <>
      <div>
        <div className="stayIdImage">
          {imageObjects.map((image) => (
            <div>
              {image.stayId === idNum && (
                <div>
                  <div className="selectedStayImages">
                    <img
                      className="selectedImages"
                      alt={image.url}
                      src={image.url}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="stayIdDetails">
          {stayObjects.map((stay) => (
            <div>
              {" "}
              {stay.id === idNum && (
                <div>
                  <div className="name"> Entire place hosted by </div>
                  <div>
                    <div className="address">{stay.address}</div>
                    <div>{stay.city}</div>
                    <div>{stay.state}</div>
                    <div>{stay.country}</div>
                    <div>{stay.price}</div>
                    <div>{stay.description}</div>
                  </div>
  
                  
                  <div>
                    <label className="reviewLabel">
                      4.9 Reviews 🐾🐾🐾🐾🐾{" "}
                    </label>
                    <ul>
                      <li>Cleanliness ━━━━━━━━━━━━━━━━━ 5</li>
                      <li>Communication ━━━━━━━━━━━━━━━━━ 5</li>
                      <li>Check In ━━━━━━━━━━━━━━━━━ 4.9</li>
                      <li>Accuracy ━━━━━━━━━━━━━━━━━ 4</li>
                      <li>Location ━━━━━━━━━━━━━━━━━ 5</li>
                      <li>Value ━━━━━━━━━━━━━━━━━ 4</li>
                    </ul>

                    <div id='bookFrom'>
                    <button >BOOK NOW!</button>
                  </div>
                <NavLink to={`/review/${stay.id}`}>
                  <div>
                    <button >Leave a Review!</button>
                  </div>
                  </NavLink>

                    <div className="stayReviews">
                      {reviewObjects.map((review) => (
                        <>
                          {review.stayId === stay.id && (
                            <div className="divReview">
                              <NavLink
                                to={`/reviews/${review.id}`}
                                className="reviewContent"
                              
                              >
                                {review.content}
                              </NavLink>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  </div>

                  <div></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stays;
