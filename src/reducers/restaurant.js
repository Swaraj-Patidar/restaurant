const defaultState={
    city:'', 
    restaurants:[],
    loader:true
};

export const restaurantReducer = (state = defaultState, action) =>{
    
    switch(action.type){
        case 'RESET_STATE':
            return defaultState;

        case 'SET_CITY':
            // console.log("CITY "+action.city)
              return {
                ...state,
                city: action.city
                
            }
        case 'FETCH_RESTAURANTS':
            return {
                ...state,
                restaurants:  action.restaurant,
                loader:action.loader 
            }

        
        default:
            // console.log("CITY "+action.city)
            return state;
    }
}