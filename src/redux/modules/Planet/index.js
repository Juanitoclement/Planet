import * as types from "./types";

const initialState = {
  loading: false,
  error: null,
  data: [],
  detail: [],
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
    case types.FETCH_PLANET_DETAIL:
      console.log("[FETCH_PLANET_DETAIL]");

      newState.loading = true;

      return newState;
    case types.FETCH_PLANET_DETAIL_SUCCESS:
      console.log("[FETCH_PLANET_DETAIL_SUCCESS]", action);

      newState.loading = false;
      newState.detail = action.payload.data.results || [];
      newState.error = null;
      return newState;
    case types.FETCH_PLANET_DETAIL_FAILED:
      console.log("[FETCH_PLANET_DETAIL_FAILED]", action);

      newState.loading = false;
      newState.error = "Fetch Planet Detail Failed";

      return newState;
    default:
      return state;
  }
};

export default userReducer;
