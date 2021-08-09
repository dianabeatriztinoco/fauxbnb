
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { getReviews } from "../../store/reviews";
// import {  } from "../../store/reviews";
import { getStays } from "../../store/stays";
// import { Link, useParams } from "react-router-dom";
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

  const reviews = useSelector((state) => state.reviews);
  const reviewObjects = Object.values(reviews);

  // const homePageImagesDisplay = () => {
  //   const reviews = useSelector((state) => state.reviews);
  //   const reviewObjects = Object.values(reviews);
  //   reviewObjects.map((review) => {
      
  //      return review.content
  //   });
  // };


  useEffect(() => {
    dispatch(getImages());
    dispatch(getStays());
    dispatch(getReviews());
  }, [dispatch]);





  return (
    <div className="stayImage">
      {imageObjects.map((image) => (
        <div className="landingPageImageContainer">
          {image.url.includes("main") && image.stayId < 4 && (
            <NavLink to={`/stays/${image.stayId}`}>
              <div>
                <img className="mainImage" alt={image.url} src={image.url} />
              </div>

              <div className="imageReview">
              <div className="paws">🐾🐾🐾🐾🐾</div>
                {reviewObjects.map((review) => (
                  
                  <>
                    {image.stayId === review.stayId && review.userId === 1 && (
                      <>
                        
                        {/* <div>{stay.address}</div>
                    <div>{stay.city}</div>
                    <div>{stay.state}</div> */}
                        {/* <div className='imageCountry'>{stay.country}</div>
                    <div className="price">${stay.price} / night </div> */}
                        {/* {reviewObjects.map((review) => ( */}
                          
                        <div className="imageDescription">
                          {review.content}
                         
                        </div>

                        {/* // ))} */}

                        
                      </>
                    )}
                  </>
                ))}
                
                <button className="bookMe"> more deets </button>
              </div>
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
};

export default Images;
