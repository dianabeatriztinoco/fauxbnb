import { csrfFetch } from "./csrf";
const LOAD_REVIEWS = 'reviews/LOAD'; 
const DELETE_REVIEWS = 'reviews/DELETE'
const CREATE_ITEM = 'reviews/CREATE'


export const load = (reviews) => ({
    type: LOAD_REVIEWS,
    payload: reviews 
})

export const create = (reviews) => ({
    type: CREATE_ITEM, 
    payload: reviews
})

export const remove = (reviewsId) => ({

        type: DELETE_REVIEWS, 
        payload: reviewsId
    })


   





export const getReviews = () => async(dispatch) => {
    const response = await fetch('/api/reviews')
    if(response.ok){
        const reviews = await response.json();
        dispatch(load(reviews))
        return reviews;
    }
}

export const deleteReview = (reviewsId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewsId}`, {
        method: 'delete'
    })
    if (response.ok){
        const review = await response.json();
        dispatch(remove(review.id))
    }
}

export const createReview = (review) => async(dispatch) => {
    const {userId, stayId, content} = review 
    
    const response = await csrfFetch('/api/reviews', {
        method: 'post', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content
        })
        
    })
    const data = await response.json()
    dispatch(create(data.review))
    return response;
}




const initialState = {};

const reviewReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_REVIEWS: {
            const allReviews = {};
            action.payload.reviews.forEach(review=>{
                allReviews[review.id] = review; 
            });

            return {
                ...state, 
                ...allReviews
            }
        }

        case DELETE_REVIEWS: 
        const newState = {...state }; 
        delete newState[action.reviewsId]
        return newState

        default: 
        return state

        

    }
}

export default reviewReducer;