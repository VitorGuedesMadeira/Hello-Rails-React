import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getGreetings = createAsyncThunk(
  'greetings/getGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/greetings/random');
    return response.json()
  },
);

const initialState = {
    message: [],
    status: 'idle',
};

// Then, handle actions in your reducers:
const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getGreetings.fulfilled, (state, action) => {
        state.message = action.payload;
        state.status = 'succeeded';
    });
    builder.addCase(getGreetings.pending, (state, action) => {
        state.status = 'loading';
    });
  },
});

// Action creators are generated for each case reducer function
export const { greetingsReducer } = greetingsSlice.actions;

export default greetingsSlice.reducer;
