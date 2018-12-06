
import {
    SELECT_PLACE, UNSELECT_PLACE
} from '../types'


export const saveSelectedPlace = ({ placeKey }) => {
    return {
        type: SELECT_PLACE,
        payload:{
            placeKey
        }
    }
}

export const removeSelectedPlace = () => {
    return {
        type: UNSELECT_PLACE,
        
    }
}
