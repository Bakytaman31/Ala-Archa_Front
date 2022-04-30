import { GET_YURTS_SUCCESS } from "../actions/ordersActions";

const initialState = {
    yurts: null,
}


const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_YURTS_SUCCESS:
            return {...state, yurts: action.yurts}
        default:
            return state;
    }
}

export default ordersReducer;