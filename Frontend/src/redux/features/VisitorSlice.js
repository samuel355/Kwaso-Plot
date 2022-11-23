import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

//Submit Interest
export const submitInterest = createAsyncThunk("visitor/interest", async ({formValue, toast}, {rejectWithValue}) => { 
    try {
        const response = await api.sendInterest(formValue)
        toast.success("Thank you for your message, kindly check your email box or spam box for the necessary action")
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const visitorSlice = createSlice({
    name: 'visitor',
    initialState: {
        details: {},
        error: '',
        loading: false,
    },

        // Fetching Plots Cycle
        extraReducers: (builder) => {
            builder
              .addCase(submitInterest.pending, (state, action) => {
              state.loading = true;
            })
            .addCase(submitInterest.fulfilled, (state, action) => {
                state.loading = false;
                state.details = action.payload
            })
            .addCase(submitInterest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })
        }
})

export default visitorSlice.reducer; 