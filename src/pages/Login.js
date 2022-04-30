import React, {useState} from 'react';
import {loginUser, logoutUser} from "../store/actions/usersActions";
import {connect, useDispatch, useSelector} from "react-redux";
import { getYurts, orderYurt, orderHotel } from '../store/actions/ordersActions';

export default function Login() {
  const error = useSelector((state) => state.error);
    const loading = useSelector((state) => state.loading);

    const dispatch = useDispatch();

    //login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //order yurt
    const [yurtId, setYurtId] = useState("");
    const [reservationStartDateTime, setreRervationStartDateTime] = useState("");
    const [reservationEndDateTime, setReservationEndDateTime] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    //order hotel
    const [roomId, setHotelId] = useState("");
    const [reservationStartDate, setReservationStartDate] = useState("");
    const [reservationEndDate, setReservationEndDate] = useState("");



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
      dispatch(orderYurt({yurtId, 
        reservationStartDateTime, 
        reservationEndDateTime, 
        first_name, 
        last_name, 
        status: "booked", 
        services: [] //в дальнейшем этого не будет
      }))
    }

    const createHotelOrder = event => {
      event.preventDefault();
      dispatch(orderHotel({roomId, 
        reservationStartDate, 
        reservationEndDate, 
        first_name, 
        last_name, 
        status: "booked", 
        services: [] //в дальнейшем этого не будет
      }))
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
              onChange={e => setreRervationStartDateTime(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Конец брони
            <input
              type="text"
              value={reservationEndDateTime}
              onChange={e => setReservationEndDateTime(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Имя
            <input
              type="text"
              value={first_name}
              onChange={e => setFirstName(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Фамилия
            <input
              type="text"
              value={last_name}
              onChange={e => setLastName(e.target.value)}
            />
          </label>
          <br></br>
          <button type="submit">Заказать юрту</button>
        </form>
        <br></br>
        <br></br>
        {/* hotels */}
        <form onSubmit={createHotelOrder}>
          <h1>Создание заказа на отель</h1>
          <label>
            id отеля
            <input
              type="text"
              value={roomId}
              onChange={e => setHotelId(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Начало брони
            <input
              type="text"
              value={reservationStartDate}
              onChange={e => setReservationStartDate(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Конец брони
            <input
              type="text"
              value={reservationEndDate}
              onChange={e => setReservationEndDate(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Имя
            <input
              type="text"
              value={first_name}
              onChange={e => setFirstName(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Фамилия
            <input
              type="text"
              value={last_name}
              onChange={e => setLastName(e.target.value)}
            />
          </label>
          <br></br>
          <button type="submit">Заказать комнату в отеле</button>
        </form>
    </div>
  );
};
