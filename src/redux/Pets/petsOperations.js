import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addPet = createAsyncThunk(
  '/addPet',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/pets', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePetImage = createAsyncThunk(
  '/updatePetImage',
  async ({ petId, formData }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`pets/${petId}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  '/deletePet',
  async (petId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`pets/${petId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const petsOperations = {
  addPet,
  updatePetImage,
  deletePet,
};

export default petsOperations;
