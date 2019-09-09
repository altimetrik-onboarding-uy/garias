import { CHANGE_TYPE } from '../actions/types';


const initialState = { type:"celulares"};
export default function(state = initialState, action) {
        switch(action.type) {
            case CHANGE_TYPE:
                return{ ...state, type:action.payload.type };
            default:
                return state;
        }
}