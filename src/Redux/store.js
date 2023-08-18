import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer"; // Import the authentication reducer
import commonReducer from "./commonReducer"; // Import the common reducer

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,     // Assign the authentication reducer to the 'auth' slice
    common: commonReducer, // Assign the common reducer to the 'common' slice
  },
});

// Export the configured Redux store
export default store;
