import { combineReducers } from 'redux'

import LocationReducer from './LocationReducer'
import LayoutReducer from './LayoutReducer'

export default combineReducers({
    locationStore: LocationReducer,
    layoutStore: LayoutReducer,
})

