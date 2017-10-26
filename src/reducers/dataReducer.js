import { actionTypes } from "../utils/constants";

const INITIAL_STATE = {
    user : null,
};


const dataReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        case actionTypes.SET_USER:
            return {
                ...state,
                user : action.payload
            };
            break;

        default:
            return state;
    }
};

export default dataReducer;