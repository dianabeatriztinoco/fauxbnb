import { csrfFetch } from "./csrf";
import { loadOne } from "./stays";
const LOAD_REVIEWS = 'reviews/LOAD'; 
const DELETE_REVIEWS = 'reviews/DELETE'
const CREATE_ITEM = 'reviews/CREATE'
const UPDATE_REVIEW = 'reviews/UPDATE'

 const load = (reviews) => ({
    type: LOAD_REVIEWS,
    payload: reviews 
})


 const remove = (reviewsId, reviews) => ({

        type: DELETE_REVIEWS, 
        payload: reviewsId, reviews
    })


   
const create = (reviews) => ({
    type: CREATE_ITEM, 
    payload: reviews

})

const update = (reviews) => ({
    type: UPDATE_REVIEW, 
    payload: reviews
})




export const getReviews = () => async(dispatch) => {
    const response = await csrfFetch('/api/reviews')
    if(response.ok){
        const reviews = await response.json();
        dispatch(load(reviews))
        return reviews;
    }
}

export const getReview = (id) => async(dispatch) => {
    
    const response = await csrfFetch('/api/reviews/')
    if (response.ok) {
        const review = await response.json();
        dispatch(load(review, id))
        return review;
    }
}
export const deleteReview = (reviewsId, reviews) => async(dispatch) => {
    
    const response = await csrfFetch(`/api/reviews/${reviewsId}`, {
        method: 'delete'
    })
    if (response.ok){
     
        const review = await response.json();
        console.log(review)
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
         userId, 
         stayId, 
         content
        })
       
    });

    if(response.ok){
    const data = await response.json()
   
    dispatch(create(data))
    return data;
    };
}

// export const updateReview = data => async dispatch => {
//     const response = await csrfFetch(`api/reviews/${data}`, {
//         method: 'put', 
//         headers: {
//             'Content-Type': 'application/json',
//         }, 
//         body: JSON.stringify(data)
//     })
//     if (response.ok) {
//         const review = await response.json();
//         dispatch(update(review));
//         return review;
//       }
//     };




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
        delete newState[action.reviewId]
        return newState
    
        case CREATE_ITEM: {
            
            return {
              ...state,
             
             [action.reviews]:action.reviews, 
        
            };
          }

          
        default: 
        return state

        

    }
}

export default reviewReducer;