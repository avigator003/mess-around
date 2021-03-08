import * as actionTypes from './ActionTypes';
import { getPersistedState } from './persist';

const initialState = {
    user:getPersistedState('user') || null,
};


const reducer = (state = initialState, action) => {
        
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESS:
            console.log("setLogin",action.payload)
     
            return {
                ...state,
                user:action.payload
            }
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                user:null
            }
      
            
          
    }

  
};

export default reducer;