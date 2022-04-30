import React, {useState} from 'react';
import {loginUser, logoutUser} from "../store/actions/usersActions";
import {connect, useDispatch, useSelector} from "react-redux";
import { getYurts, orderYurt } from '../store/actions/ordersActions';

export default function Login() {
  const error = useSelector((state) => state.error);
    const loading = useSelector((state) => state.loading);

    const dispatch = useDispatch();

    //login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //order yurt
    const [yurtId, setYurtId] = useState("");
    const [reservationStartDateTime, setreRervationStartDate] = useState("");
    const [reservationEndDateTime, setReservationEndDate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //order hotel
    const [hotelId, setHotelId] = useState("");
    


    const submitFormHandler = event => {
        event.preventDefault();
        dispatch(loginUser({email, password}));
    };

    const onLogout = event => {
      event.preventDefault();
      dispatch(logoutUser());
    }

    const getYurt = event => {
      event.preventDefault();
      dispatch(getYurts());
    }

    const createYurtOrder = event => {
      event.preventDefault();
      dispatch(orderYurt({yurtId, reservationStartDateTime, reservationEndDateTime, firstName, lastName}))
    }

  return (
    <div>
      {/* login */}
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
            <button type='submit'>Log in</button>
        </form>
        <button onClick={onLogout}>log out</button>
        <br></br>
        <br></br>
        {/* yurts */}
        <h1>Получение юрт</h1>
        <button onClick={getYurt}>Get yurts</button>
        <br></br>
        <br></br>
        <h1>Создание заказа на юрту</h1>
        <form onSubmit={createYurtOrder}>
          <label>
            id юрты
            <input
              type="text"
              value={yurtId}
              onChange={e => setYurtId(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Начало брони
            <input
              type="text"
              value={reservationStartDateTime}
              onChange={e => setreRervationStartDate(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Конец брони
            <input
              type="text"
              value={reservationEndDateTime}
              onChange={e => setReservationEndDate(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Имя
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Фамилия
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </label>
          <br></br>
          <button type="submit">Заказать юрту</button>
        </form>
        <br></br>
        <br></br>
        {/* hotels */}
        <form>
          <h1>Создание заказа на отель</h1>
          <label>
            id отеля
            <input
              type="text"
              value={hotelId}
              onChange={setHotelId}
            />
          </label>
        </form>
    </div>
  );
};
