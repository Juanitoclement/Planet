import * as types from "./types";

const initialState = {
  loading: false,
  error: null,
  data: [],
  nextPage: "",
};

const userReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case types.FETCH_PLANET:
      console.log("[FETCH_PLANET]");

      newState.loading = true;

      return newState;
    case types.FETCH_PLANET_SUCCESS:
      console.log("[FETCH_PLANET_SUCCESS]", action);

      newState.loading = false;
      newState.data = action.payload.data.results || [];
      newState.nextPage = action.payload.data.next;
      newState.error = null;
      return newState;
    case types.FETCH_PLANET_FAILED:
      console.log("[FETCH_PLANET_FAILED]", action);

      newState.loading = false;
      newState.error = "Fetch Planet Failed";

      return newState;
    default:
      return state;
  }
};

export default userReducer;
