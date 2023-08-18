// reducers/commonSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create a Redux slice for common state
const commonSlice = createSlice({
  name: "common", // Slice name
  initialState: {
    isSidebarOpen: true, // Initial state for sidebar visibility
  },
  reducers: {
    // Reducer function to toggle the sidebar visibility
    toggleSidebar: (state, action) => {
      // Toggle the value of isSidebarOpen
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

// Export the action creator for toggling the sidebar
export const { toggleSidebar } = commonSlice.actions;

// Export the reducer for integration into the Redux store
export default commonSlice.reducer;
