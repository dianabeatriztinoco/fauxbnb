

// constants to define action types and prevent typos in action type string literals 
const LOAD_IMAGES = 'images/LOAD';

export const load = (images) => ({
    type: LOAD_IMAGES, 
    payload: images
});

export const  getImages = (image) => async (dispatch) => {
   
    const response = await fetch('/api/images')
    if(response.ok){
    const images = await response.json();
    dispatch(load(images))
  
    return images
    }
    
}

    
const initialState = {};

const imageReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_IMAGES: {
            const allImages = {};
           
            action.payload.images.forEach(image => {
           
                allImages[image.id] = image;
            });
            return {
                ...state, 
                ...allImages
            }
          
        }

        default:
        return state
}
}

export default imageReducer;