import axiosAPI from '../../axios.js';
import {push} from 'connected-react-router';
import { loadFromLocalStorage } from '../localStorage.js';

let token;

try{
    token = loadFromLocalStorage().users.user.access;
} catch(e) {
    token = "token";
}

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }


export const GET_YURTS_REQUEST = 'GET_YURTS_REQUEST';
export const GET_YURTS_SUCCESS = ' GET_YURTS_SUCCESS';
export const GET_YURTS_FAILURE = 'GET_YURTS_FAILURE';

export const ORDER_YURT_REQUEST = 'ORDER_YURT_REQUEST';
export const ORDER_YURT_SUCCESS = 'ORDER_YURT_SUCCESS';
export const ORDER_YURT_FAILURE = 'ORDER_YURT_FAILURE';

export const ORDER_HOTEL_REQUEST = 'ORDER_HOTEL_REQEST';
export const ORDER_HOTEL_SUCCESS = 'ORDER_HOTEL_SUCCESS';
export const ORDER_HOTEL_FAILURE = 'ORDER_HOTEL_FAILURE';

export const getYurtsRequest = () => ({type: GET_YURTS_REQUEST});
export const getYurtsSuccess = yurts => ({type: GET_YURTS_SUCCESS, yurts});
export const getYurtsFailure = error => ({type: GET_YURTS_FAILURE, error});

export const orderYurtRequest = () => ({type: ORDER_YURT_REQUEST});
export const orderYurtSuccess = () => ({type: ORDER_YURT_SUCCESS});
export const orderYurtFailure = error => ({type: ORDER_YURT_FAILURE, error});

export const orderHotelRequest = () => ({type: ORDER_HOTEL_REQUEST});
export const orderHotelSuccess = () => ({type: ORDER_HOTEL_SUCCESS});
export const orderHotelFialure = error => ({type: ORDER_HOTEL_FAILURE, error});


export const getYurts = () => {
    return async dispatch => {
        try {
            dispatch(getYurtsRequest());
            const response = await axiosAPI.get('api/v1/order/yurt_type/', {headers: headers});
            dispatch(getYurtsSuccess(response.data));
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                dispatch(getYurtsFailure(error.response.data));
            } else {
                dispatch(getYurtsFailure({global: 'Network error or no internet'}));
            }
        }
    }
}

export const orderYurt = data => {
    return async dispatch => {
        try {
            dispatch(orderYurtRequest());
            console.log(data);
            const res = await axiosAPI.post('/api/v1/order/yurt/create/', data, {headers: headers});
            console.log(res);
        } catch (e) {   
            console.log(e);
            // dispatch(orderYurtFailure(e));
        }
    }
}

export const orderHotel = data => {
    return async dispatch => {
        try {
            dispatch(orderHotelRequest);
            const res  = await axiosAPI.post('/api/v1/order/yurt_room/create/', {headers: headers}, data);
        } catch (e) {
            console.log(e)
        }
    }
}