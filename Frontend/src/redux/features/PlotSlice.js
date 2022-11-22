import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

export const getPlots = createAsyncThunk("/tours", async (_, {rejectWithValue}) => { 
    try {
        const response = await api.getAllPlots()
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data)

    }
})

const plotSlice = createSlice({
    name: 'plot',
    initialState: {
        plots: [],
        plot:{},
        loading: false,
        error: "",
    },

    extraReducers: (builder) => {
        builder
          .addCase(getPlots.pending, (state, action) => {
          state.loading = true;
        })
          .addCase(getPlots.fulfilled, (state, action) => {
            state.loading = false;
            state.plots = action.payload
          })
          .addCase(getPlots.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
          })
      }
})

export default plotSlice.reducer;