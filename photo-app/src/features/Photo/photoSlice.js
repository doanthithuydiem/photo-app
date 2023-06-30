import { createSlice } from "@reduxjs/toolkit";
import { deletePhoto, getListPhoto } from "./photoThunk";

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {
    // chỗ này để viết các action không liên quan tới API
    // addPhoto: (state, action) => {
    //   state.push(action.payload);
    // },
    // removePhoto: (state, action) => {
    //   const removeId = action.payload;
    //   return(state = state.findIndex((photo) => photo.id !== removeId));
    // },
    // editPhoto: (state, action) => {
    //   const newPhoto = action.payload;
    //   const index = state.findIndex((photo) => photo.id === newPhoto.id);
    //   if (index >= 0) {
    //     state[index] = newPhoto;
    //   }
    // },
  },
  extraReducers: (builder) => {
     // chỗ này để viết các trạng thái cho action có sử dụng API
    builder
    .addCase(getListPhoto.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    })
    .addCase(getListPhoto.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getListPhoto.rejected, (state, action) => {
      state.isLoading = false;
    })
    //xử lí thêm case delete từ photoThunk truyền sang
    .addCase(deletePhoto.fulfilled, (state, action) => {
      const removeId = action.payload;
      state.photos = state.photos.filter((photo) => photo.id !== removeId);
    });
  }
});
const { actions, reducer } = photoSlice;
// export const { addPhoto, removePhoto, editPhoto } = actions; // dòng này để export các action từ reducers
export const { filterPhoto } = actions;
export default reducer
