export const INITIAL_STATE = {
  error: "",
  fetching: false,
  beer: {},
};

export const ACTIONS = {
  FETCH_SUCCESS: "FETCH_DATA",
  FETCH_ERROR: "FETCH_ERROR",
  RESET_DATA: "RESET_DATA",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        fetching: true,
        beer: action.payload,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        error: `ERROR FETCHING: ${action.payload}`,
        fetching: false,
        beer: {},
      };
    case ACTIONS.RESET_DATA:
      return {
        error: "",
        fetching: false,
        beer: {},
      };
    default:
      return state;
  }
};
