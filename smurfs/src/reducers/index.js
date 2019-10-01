import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SMURFS_START:
            return {
                ...state, 
                error: ""
            };
            case GET_SMURFS_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload,
                    error: ""
                };
                case GET_SMURFS_FAILURE:
                    return {
                        ...state,
                        error: action.payload
                    };
                    default:
                        return state;
    }
};
