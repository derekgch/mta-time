
const initialState = {
    shows: [],
    selectedShow: null,
    searchTerm: "",
}

function reducer  (state = initialState, action, id)  {
    console.log('state', state);
    console.log('action', action);
    console.log('id:arg', id);
    console.log('id:meow', action.id);

    switch(action.type) {
      case "CLICK_EVENT":
        const { data } = action.payload;
        let found = state.shows.find( e => e.id === data)
        return {...state, selectedShow: found }

      case "LOAD_EVENT":
        return { ...state, shows: action.payload.data }
      case "SEARCH_EVENT":
        return { ...state, searchTerm: action.payload.data }
    //   case "TOGGLE_DANCING":
    //     return { ...state, dancing: !state.dancing }
    //   case "SET_COUNTER":
    //     return { ...state, counter: action.payload.value }
      default:
        return state;
    }
  
  } 
  export default reducer;
