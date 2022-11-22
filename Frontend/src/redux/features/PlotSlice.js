import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const plotSlice = createSlice({
    name: 'plot',
    initialState: {
        plots: [],
        loading: false
    }
})

export default plotSlice.reducer;