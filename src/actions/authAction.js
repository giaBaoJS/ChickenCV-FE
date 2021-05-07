import * as api from "../api";
import { AUTH_ERROR, LOGIN, TURN_OFF_MODAL, UPDATED_INFO } from "../constants";
import { getCadidateById } from "./cadidateAction";

export const login = (loginModel, errorHandler) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await api.login(loginModel);
    localStorage.setItem("token", data.token);
    localStorage.setItem("expiration", data.expiration);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({
      type: LOGIN,
      payload: data,
    });
  } catch (error) {
    if (errorHandler) errorHandler(error.response.data.message);
  }
};

export const signupCandidate = (
  signupModel,
  errorHandler,
  successHandler
) => async (dispatch, getState) => {
  try {
    const { data } = await api.signupCandidate(signupModel);
    if (successHandler) successHandler();
  } catch (error) {
    if (errorHandler) errorHandler(error.response.data.message);
  }
};

export const signupCompany = (
  signupModel,
  errorHandler,
  successHandler
) => async (dispatch, getState) => {
  try {
    const { data } = await api.signupCompany(signupModel);
    if (successHandler) successHandler();
  } catch (error) {
    if (errorHandler) errorHandler(error.response.data.message);
  }
};

export const editInfoCandidate = (id, data) => async (dispatch) => {
  try {
    await api.editInfoCandidate(id, data);
    await dispatch({ type: UPDATED_INFO, payload: data });
    dispatch({ type: TURN_OFF_MODAL });
  } catch (error) {
    console.log(error);
  }
};
export const editInfoCompany = (id, data) => async (dispatch) => {
  try {
    await api.editInfoCompany(id, data);
    await dispatch({ type: UPDATED_INFO, payload: data });
    dispatch({ type: TURN_OFF_MODAL });
  } catch (error) {
    console.log(error);
  }
};
