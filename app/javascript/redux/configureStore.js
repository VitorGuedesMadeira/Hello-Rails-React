import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducer/greetings';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer
  },
});

export default store;