import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { photoApi } from "../../config/apiConfig";


export const getListPhoto = createAsyncThunk(
  "getListPhoto", 
  async (data, { getState, dispatch }) => {
    try {
      const res = await axios.get(photoApi)
      return res.data
    }
    catch (err) {
    throw new Error(err.message)
    }
  }
);

export const postPhoto = createAsyncThunk(
  "postPhoto",
  async (data, { getState, dispatch }) => {
    try {
      const res = await axios.post(photoApi, data);
      if ( res.status === 201) {
        dispatch(getListPhoto);
      }
    }
    catch (err) {
    throw new Error(err.message);
    }
  }
);

export const editPhoto = createAsyncThunk (
  "editPhoto",
  async (data, { dispatch }) => {
    try {
      const res = await axios.put(`${photoApi}/${data.id}`, data);
      if (res.status === 200) {
        dispatch(getListPhoto);
      }
    }
    catch (err) {
    throw new Error(err.message);
    }
  }
);

export const deletePhoto = createAsyncThunk (
  "deletePhoto", 
  async (id, { dispatch }) => {
    try {
      const res = await axios.delete(`${photoApi}/${id}`);
      return res.data.id
    }
    catch (err) {
    throw new Error(err.message);
    }
  }
);


//làm thêm case delete ở trên
