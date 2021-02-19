import * as types from "./types";
import axios from "axios";

// GET ARTICLE LIST BY TOKEN
const setPlanetLoading = (isLoading) => ({
  type: types.FETCH_PLANET,
  payload: {
    loading: isLoading,
  },
});

const setPlanetSuccess = (data) => {
  return {
    type: types.FETCH_PLANET_SUCCESS,
    payload: {
      data,
      loading: false,
    },
  };
};

const setPlanetFailed = (data) => ({
  type: types.FETCH_PLANET_FAILED,
  payload: {
    data,
  },
});

export const fetchPlanet = (url) => (dispatch) => {
  dispatch(setPlanetLoading());

  const config = {
    method: "get",
    url: url.replace(/^http:\/\//i, "https://"),
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response, "helo response");
      dispatch(setPlanetSuccess(response.data));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(setPlanetFailed());
    });
};
