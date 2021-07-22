
const LOAD_STAYS = 'stays/LOAD'; 

export const load = (stays) => ({
    type: LOAD_STAYS,
    payload: stays
})

export const getStays = () => async(dispatch) => {
    const response = await fetch('/api/stays')
    if(response.ok){
        const stays = await response.json();
        dispatch(load(stays))
        return stays;
    }
}

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
        default: 
        return state
    }
}
export default staysReducer;