import {
    YURT_CREATE_FAILURE,
    YURT_CREATE_REQUEST,
    YURT_CREATE_SUCCESS
  } from "../actions/yurtActions";
  
  const initialState = {
    yurt: null
  };
  
  const yurtReducer = (state = initialState, action) => {
    switch (action.type) {
      case YURT_CREATE_REQUEST:
        return {...state};
      case YURT_CREATE_SUCCESS:
        return {...state};
      case YURT_CREATE_FAILURE:
        return {...state};
      default:
        return state;
    }
  };
  
  export default yurtReducer;