import {configureStore} from '@reduxjs/toolkit'
import PlotReducer from './features/PlotSlice'
import UserReducer from './features/UserSlice'

export default configureStore({
    reducer: {
        plot: PlotReducer,
        user: UserReducer
    }
})