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

export const getPlot = createAsyncThunk("/plots/:id", async (id, {rejectWithValue}) => {
    try {
        const response = await api.plot(id)
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
        plotName: '',
        loading: false,
        error: "",
    },

    reducers: {
        getPlotName : (state, action) => {
            const plotName = state.plots.find((plot) => plot._id === action.payload)
            if (plotName){
                state.plotName = `Plot Number ${plotName.properties.Plot_No}  ${plotName.properties.Street_Nam} `;
            }else{
                console.log('Error Ocurred')
            }
        }
    },

    // Fetching Plots Cycle
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

        //Single Plot Cycle
        builder
            .addCase(getPlot.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getPlot.fulfilled, (state, action) => {
            state.loading = false;
            state.plot = action.payload;
        })
        .addCase(getPlot.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
    }

})

export const {getPlotName} = plotSlice.actions

export default plotSlice.reducer; 