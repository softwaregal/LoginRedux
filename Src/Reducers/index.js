import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from "../Actions/" //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            console.log("reducer",action.data);
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
