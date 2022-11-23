import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

export const login = createAsyncThunk("/login", async ({formValue, navigate, toast}, {rejectWithValue}) => { 
    try {
        const response = await api.login(formValue)
        toast.success('Logged in successfully')
        navigate('/')
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
        loading: false,
        error: "",
    },

    reducers: {
        logout: (state, action) => {
            state.user = null;
            localStorage.removeItem('user');
            document.location.reload();
        }
    },

    // Fetching Plots Cycle
    extraReducers: (builder) => {
        builder
          .addCase(login.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            localStorage.setItem('user', JSON.stringify({...action.payload}));
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        })
    }
})

export const {logout} = userSlice.actions;

export default userSlice.reducer; 