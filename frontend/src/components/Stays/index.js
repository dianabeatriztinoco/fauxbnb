import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";
import { deleteReview, getReviews, createReview} from '../../store/reviews'
import { getStays } from "../../store/stays";
import { useParams } from 'react-router-dom'


const Stays = () => {
    const { id } = useParams(); 
    console.log( id )

    return (
        <div> test </div>
    )
}

export default Stays