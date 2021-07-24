
const LOAD_STAYS = 'stays/LOAD'; 
const LOAD_STAY = 'stay/LOAD'

export const load = (stays) => ({
    type: LOAD_STAYS, 
    payload: stays
})

export const loadOne = (stay) => ({
    type: LOAD_STAY, 
    payload: stay
})

export const getStays = () => async(dispatch) => {
    const response = await fetch('/api/stays')
    if(response.ok){
        const stays = await response.json();
        dispatch(load(stays))
        return stays;
    }
}

// export const getStay = () => async(dispatch) => {
//     const response = await fetch('/api/stays')
//     if(response.ok){
//         const stay = await response.json();
//         dispatch(load(stay))
//         return stay
//     }
// }

const initialState = {};

const staysReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_STAYS: {
            const allStays = {};
            action.payload.stays.forEach(stay=>{
                allStays[stay.id] = stay; 
            });

            return {
                ...state, 
                ...allStays
            }
        }
        //     case LOAD_STAY: {
              
        //         return {
        //             ...state, 
        //             [action.stay.id] : action.stay
        //         }
        // }
        default: 
        return state
    }
}
export default staysReducer;