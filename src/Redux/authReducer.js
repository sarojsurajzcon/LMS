// reducers/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for logging in
export const loginAsync = createAsyncThunk("auth/loginAsync", async () => {
  // Perform an async login operation, e.g., API call
  return null; // Placeholder; replace with actual login result
});

// Create a Redux slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,       // User authentication data
    loading: false,   // Loading state for async operations
    error: null,      // Error message in case of failures
  },
  reducers: {
    // Standard Redux reducer for updating the authentication state synchronously
    login: (state, action) => {
      state.data = action.payload; // Update user authentication data
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state while the async login operation is in progress
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;  // Set loading state to true
        state.error = null;    // Clear any previous errors
      })
      // Handle successful completion of the async login operation
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false; // Set loading state to false
        state.data = action.payload; // Update user authentication data
      })
      // Handle rejection or failure of the async login operation
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;  // Set loading state to false
        state.error = action.error.message; // Update error state with error message
      });
  },
});

// Export the synchronous action creator and reducers
export const { login } = authSlice.actions;

// Export the reducer for integration into the Redux store
export default authSlice.reducer;
