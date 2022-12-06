import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

//fetch all plots
export const getPlots = createAsyncThunk("/tours", async (_, {rejectWithValue}) => { 
  try {
    const response = await api.getAllPlots()
    return response.data;
} catch (error) {
    console.log(error)
    return rejectWithValue(error.response.data)
  }
})

//fetch single plot
export const getPlot = createAsyncThunk("/plots/plot", async (id, {rejectWithValue}) => {
  try {
    const response = await api.plot(id)
    return response.data;
  } catch (error) {
    console.log(error)
    return rejectWithValue(error.response.data)
  }
})

//Update Plot
export const updatePlot = createAsyncThunk("/plot/update", async ({id, status, toast, navigate}, {rejectWithValue}) => {
  try {
    const response = await api.updatePlot(id, status)
    navigate('/')
    toast.success('Plot Updated Successfully')
    return response.data;
    
  } catch (error) {
    console.log(error)
    return rejectWithValue(error.response.data)
  }
})

const plotSlice = createSlice({
  name: 'plot',
  initialState: {
    plot:{},
    plots: [],
    plotName: '',
    loading: false,
    error: "",
  },

  // Get Plot Number and Street Name
  reducers: {
    getPlotName : (state, action) => {
      const plotName = state.plots.find((plot) => plot._id === action.payload)
      if (plotName){
        state.plotName = `Plot Number ${plotName.properties.Plot_No}  ${plotName.properties.Street_Nam} `;
      }else{
        console.log('Error Ocurred')
      }
    },
  },

  // Extra Reducers Cycles
  extraReducers: (builder) => {
    //Fetch All plots
    builder
      .addCase(getPlots.pending, (state, action) => {
      state.loading = true;
    })
      .addCase(getPlots.fulfilled, (state, action) => {
        state.loading = false;
        state.plots = action.payload
        state.plot = {}
      })
      .addCase(getPlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message
      })

      //Fetch Single Plot Cycle
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

      //Update Plot Cycle
      builder
       .addCase(updatePlot.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePlot.fulfilled, (state, action) => {
        state.loading = false;
        
        const {arg: {id},} = action.meta
        if(id){
          state.plots = state.plots.map((item) => item._id === id ? action.payload : item)
        }

        state.error = action.payload.message;
      })
      .addCase(updatePlot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
  }

})

export const {getPlotName} = plotSlice.actions

export default plotSlice.reducer; 