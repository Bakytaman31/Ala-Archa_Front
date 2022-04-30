import React, { useState } from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import { orderYurt } from '../store/actions/ordersActions';

export default function tests() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [startDate, setStartDate] = useState('');
    // const [endDate, ]


    const dispatch = useDispatch();

    const createyurt = event => {
        event.preventDefault();
        dispatch(orderYurt());
      }
  return (
    <div>
        <form>

        </form>
    </div>
  )
}
