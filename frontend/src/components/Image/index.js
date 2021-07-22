import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { getStays } from "../../store/stays";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Images.css";
import Stay from "../Stay";

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
        <div>
          {image.url.includes("main") && (
            <NavLink to="stays">
              <img className="mainImage" alt={image.url} src={image.url} />
                <div>
                {stayObjects.map((stay) => (
                  <div> {stay.id === image.stayId && (
                    <div>
                    <div>{stay.address}</div>
                    <div>{stay.city}</div>
                    <div>{stay.state}</div>
                    <div>{stay.country}</div>
                    <div>{stay.price}</div>
                    <div>{stay.description}</div>
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
