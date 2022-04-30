import axiosAPI from '../../axios.js';
import {push} from 'connected-react-router';
import { useNavigate } from "react-router-dom";


export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const registerUserRequest = () => ({type: REGISTER_USER_REQUEST});
export const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

export const loginUserRequest = () => ({type: LOGIN_USER_REQUEST});
export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

export const logoutUserSuccess = () => ({type: LOGOUT_USER});

export const registerUser = userData => {
    return async dispatch => {
        try {
            dispatch(registerUserRequest());
            await axiosAPI.post('/users', userData);
            dispatch(registerUserSuccess());
            dispatch(push('/login'));
        } catch (error) {
            if (error.response) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure({global: 'Network error or no internet'}));
            }
        }
    }
};

export const loginUser = userData => {
    return async dispatch => {
        
        try {
            dispatch(loginUserRequest());
            const response = await axiosAPI.post('/api/v1/auth/token/', userData);
            dispatch(loginUserSuccess(response.data));
            //navigate("/")
            
        } catch (error) {
            // dispatch(loginUserFailure(error.response.data));
        }
    }
};


export const logoutUser = () => {

//рефрешнуть токен на 0 и просто удалить сессию на локалке
    return dispatch => {
        
        dispatch(logoutUserSuccess());
    }
};

export const editProfile = profileData => {
    return async dispatch => {
        const response = await axiosAPI.patch('/users/profile', profileData);
        response.data.avatar = 'http://localhost:8000' + '/' + response.data.avatar;
        dispatch(loginUserSuccess(response.data));
        dispatch(push('/'));
    }
};

