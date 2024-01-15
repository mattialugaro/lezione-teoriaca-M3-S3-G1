//src/app.js

import React,  { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setUser, clearUser, setCart, clearCart } from "./actions";

const App = () => {
  /** Form */
  const [formData, setFormData] = useState({
    name: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.prevDefault();
    console.log(formData);
    dispatch(setUser(formData.name))
  };
  /** Fine Form */

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user )
  const cart = useSelector((state) => state.cart )


  return (
    <div>
      <h1>Counter: { counter.counter ? counter.counter : '?' }</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

      <h2>User: {user.user ? user.user : 'No user set'}</h2>
        <button onClick={() => dispatch(setUser('Mattia'))}>Set User</button>
        <button onClick={() => dispatch(clearUser())}>Clear User</button>

        <h2>Cart: {cart.cart ? <div><p>Name: {cart.cart.name}</p><p>Qt: {cart.cart.qt}</p></div> : 'No cart set'}</h2>
        <button onClick={() => dispatch(setCart({name:'Mouse', qt:1}))}>Set cart</button>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>

        <br /><br />

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
    </div>
  );
};

export default App;
