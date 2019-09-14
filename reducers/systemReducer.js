const initialState = {
    name: "Sriniwas",
    navigationObject: {}
}

export default systemReducer = (state=initialState, action) => {
    switch(action.type){
        case "NAVIGATION_CHANGED":
            return {
                ...state,
                navigationObject: action.payload.navigation
            }
        default:
            break;
    }
    return state;
}