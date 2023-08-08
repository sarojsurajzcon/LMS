// reducers/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Async thunk for logging in
// export const loginAsync = createAsyncThunk("auth/loginAsync", async (data) => {
//   return null;
// });

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAsync.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginAsync.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(loginAsync.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
});

export const { toggleSidebar } = commonSlice.actions;

export default commonSlice.reducer;
