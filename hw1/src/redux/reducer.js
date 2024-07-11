const initialState = {
    number:0
}

export default function reducer(state = initialState,action){
   if(action.type === "SUBTRACT_TEN"){
       return{...state,number: Math.max(state.number - action.payload,0)}
   }else if(action.type === "SUBTRACT_ONE"){
       return {...state,number:Math.max( state.number - action.payload,0)}
   }else if(action.type === "ADD_ONE"){
       return {...state,number: state.number + action.payload}
   }else if(action.type === "ADD_TEN"){
       return {...state,number: state.number + action.payload}
   }
   else if(action.type === "RESET"){
       return {...state,number:0}
   }
   return state
}