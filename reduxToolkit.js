/* 
Redux Toolkit:-

Redux Toolkit (RTK) is the official, recommended way to write Redux logic.
It simplifies the process of setting up and using Redux.

Why use Redux Toolkit?

Old Redux had problems:

Too much boilerplate (lots of files: actions, action types, reducers)
Manual switch statements
Hard to scale and maintain

RTK fixes all that:

Less code
Built-in best practices
Powerful features like createSlice, createAsyncThunk, and configureStore

/src
  ├── index.js
  ├── App.js
  └── redux/
        ├── store.js
        └── counterSlice.js
*/

// in counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
//---------------------------------------------------------------

//in store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
//-------------------------------------------------------------
//in app.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>
    </div>
  );
}

export default App;
//------------------------------------------------------------------


//in index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



