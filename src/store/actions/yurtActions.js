import axiosAPI from '../../axios.js';
import {push} from 'connected-react-router';
import { loadFromLocalStorage } from '../localStorage.js';

let token;

try{
    token = loadFromLocalStorage().users.user
} catch(e) {
    token = "token"
}

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }

export const YURT_CREATE_REQUEST = 'YURT_CREATE_REQUEST';
export const YURT_CREATE_SUCCESS = 'YURT_CREATE_SUCCESS';
export const YURT_CREATE_FAILURE = 'YURT_CREATE_FAILURE';

export const yurtCreateRequest = () => ({type: YURT_CREATE_REQUEST});
export const yurtCreateSuccess = () => ({type: YURT_CREATE_SUCCESS});
export const yurtCreateFailure = error => ({type: YURT_CREATE_FAILURE, error});

export const createYurt = () => {
    return async dispatch => {
        try {
            dispatch(yurtCreateRequest());
            await axiosAPI.get('api/v1/order/yurt_type/', {headers: headers});
            dispatch(yurtCreateSuccess());
            dispatch(push('/login'));
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                dispatch(yurtCreateFailure(error.response.data));
            } else {
                dispatch(yurtCreateFailure({global: 'Network error or no internet'}));
            }
        }
    }
}