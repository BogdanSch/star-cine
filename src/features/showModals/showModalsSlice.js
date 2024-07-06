import { createSlice } from "@reduxjs/toolkit";

export const showModalsSlice = createSlice({
  name: "showModals",
  initialState: {
    value: {
      showConfirmModal: false,
      showErrorModal: false,
    },
  },
  reducers: {
    setShowConfirmModal: (state, action) => {
      state.value.showConfirmModal = action.payload;
    },
    setShowErrorModal: (state, action) => {
      state.value.showErrorModal = action.payload;
    },
  },
});

export const { setShowConfirmModal, setShowErrorModal } =
  showModalsSlice.actions;
export default showModalsSlice.reducer;
