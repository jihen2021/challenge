import {GET_WEATHER_FAIL,GET_WEATHER_SUCCES,WEATHER_LOAD}from '../constants/weatherAction'

const initialState={
    data:[],
    isLoading:false,
    errors:null
    
}
export const weReducer=(state=initialState,{type,payload})=>{

switch (type) {
    case WEATHER_LOAD :
        return {...state,isLoading:true};
        
        case GET_WEATHER_SUCCES :
            return {...state,data:payload,isLoading:false};
         
            case GET_WEATHER_FAIL :
                return {...state,errors:payload,isLoading:false};

    default:
         return state
}


}