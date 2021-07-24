import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { getReviews } from "../../store/reviews";
import { getStays } from "../../store/stays";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Images.css";


const Images = () => {
  // const stayImages = useSelector((state)=> {
  //    if(!images.stayImages) return null;
  //    return images.stayImages.map(stayImageId => state.items[stayImageId]);
  const dispatch = useDispatch();

  const images = useSelector((state) => state.images);
  const imageObjects = Object.values(images);

  const stays = useSelector((state) => state.stays);
  const stayObjects = Object.values(stays);


  useEffect(() => {
    dispatch(getImages());
    dispatch(getStays());
  }, [dispatch]);



 

  return (
    

    <div className="stayImage">
     
      {imageObjects.map((image) => (


        <div className='landingPageImageContainer'>
          
          {image.url.includes("main") && (
            <NavLink to={`/stays/${image.stayId}`} >
              <div>
              <img className="mainImage" alt={image.url} src={image.url} />
            
              </div>

                <div className="imageReview">
                {stayObjects.map((stay) => (
                  <div> {stay.id === image.stayId && (
                    <div>
                      <div>🐾🐾🐾🐾🐾</div>
                    {/* <div>{stay.address}</div>
                    <div>{stay.city}</div>
                    <div>{stay.state}</div> */}
                    <div className='imageCountry'>{stay.country}</div>
                    <div className="price">${stay.price} / night </div>
                    <div className='imageDescription'>{stay.description}...</div>
                    
                    <button className="bookMe"> more deets </button>
                  
                    </div>
                   
                     
                     
                  ) } </div>
                ))}
                </div>
           
            </NavLink>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default Images;
