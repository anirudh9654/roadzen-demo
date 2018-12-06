import {SELECT_PLACE, UNSELECT_PLACE} from '../types'

const INITIAL_STATE = {
    activePlaceKey:null,
    places: [
        {
            coordinates:[28.6275296,77.2270415],
            name:'Connaught Place, New Delhi',
            key:1
        },
        {
            coordinates:[28.6275298,77.2176446],
            name:'Paharganj, Delhi',
            key:2
        },
        {
            coordinates:[28.679976,77.1810341],
            name:'Kamla Nagar, New Delhi',
            key:3
        },
        {
            coordinates:[28.6799815,77.1285052],
            name:'Rohini, New Delhi',
            key:4
        },
        {
            coordinates:[28.0605125,74.9134513],
            name: 'Jaipur, Rajasthan',
            key:5
        },
        {
            coordinates:[30.7005696,76.7905249],
            name: 'Chandigarh, Punjab',
            key:6
        },
        {
            coordinates:[28.0605125,74.9134513],
            name: 'Jaipur, Rajasthan',
            key:7
        },
        {
            coordinates:[21.4369675,73.7844113],
            name: 'Mumbai, India',
            key:8
        }
    ]
}

const handler = {
    [SELECT_PLACE] : (state,action) => {
        return { 
            ...state, 
            activePlaceKey: state.activePlaceKey === action.payload.placeKey ? null : action.payload.placeKey
        }
    },
    [UNSELECT_PLACE] : (state) => {
        return {
            ...state,
            activePlaceKey: null
        }
    }
}


export default (state=INITIAL_STATE,action) => {
    if(handler[action.type]){
        return handler[action.type](state,action)
    }
    return state
} 

