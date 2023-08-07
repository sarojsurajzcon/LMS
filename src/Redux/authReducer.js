// reducers/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for logging in
export const loginAsync = createAsyncThunk("auth/loginAsync", async (data) => {
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
