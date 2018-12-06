// import { } from '../types'

const INITIAL_STATE = {
    
}

const handler = {
    
}


export default (state=INITIAL_STATE,action) => {
    if(handler[action.type]){
        return handler[action.type](state,action)
    }
    return state
} 

