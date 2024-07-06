import { createSlice } from "@reduxjs/toolkit";

export const formErrorsSlice = createSlice({
  name: "formErrors",
  initialState: {
    value: {},
  },
  reducers: {
    setFormErrors: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFormErrors } = formErrorsSlice.actions;
export default formErrorsSlice.reducer;
