import React, {useState} from 'react';
import {loginUser} from "../store/actions/usersActions";
import { createYurt } from '../store/actions/yurtActions';
import {connect, useDispatch, useSelector} from "react-redux";

export default function Login() {
  const error = useSelector((state) => state.error);
    const loading = useSelector((state) => state.loading);

    const dispatch = useDispatch();

    //state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitFormHandler = event => {
        event.preventDefault();
        dispatch(loginUser({email, password}));
    };

    const createyurt = event => {
      event.preventDefault();
      dispatch(createYurt());
    }

  return (
    <div>
        <form onSubmit={submitFormHandler}>
            <input
                type="text"
                value={email}
                name="email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                name="password"
                onChange={e => setPassword(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
        <button onClick={createyurt}>some</button>
    </div>
  );
};
