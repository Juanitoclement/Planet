import * as types from "./types";
import axios from "axios";

// GET PLANET
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
      dispatch(setPlanetSuccess(response.data));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(setPlanetFailed());
    });
};

// GET PLANET DETAIL
const setPlanetDetailLoading = (isLoading) => ({
  type: types.FETCH_PLANET_DETAIL,
  payload: {
    loading: isLoading,
  },
});

const setPlanetDetailSuccess = (data) => {
  return {
    type: types.FETCH_PLANET_DETAIL_SUCCESS,
    payload: {
      data,
      loading: false,
    },
  };
};

const setPlanetDetailFailed = (data) => ({
  type: types.FETCH_PLANET_DETAIL_FAILED,
  payload: {
    data,
  },
});

export const fetchPlanetDetail = (id) => (dispatch) => {
  dispatch(setPlanetDetailLoading());

  const config = {
    method: "get",
    url: `https://swapi.dev/api/planets/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      dispatch(setPlanetDetailSuccess(response.data));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(setPlanetDetailFailed());
    });
};
