import * as api from "../api";
import {
  DELETE_CV_CADIDATE,
  FETCH_LIST_CV_APPLICED,
  FETCH_LIST_CV_OF_CADIDATE,
  FETCH_LIST_JOB_APPLICED,
  GET_DATA_COMPANY_CARD,
  TURN_OFF_MODAL
} from "../constants";

export const getListCVOfCadidate = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchListCVOfCadidate(id);
    dispatch({
      type: FETCH_LIST_CV_OF_CADIDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getListJobAppliced = (id) => async (dispatch) => {
  try {
    if (id) {
      const response = await api.fetchListJobAppliced(id);
      dispatch({
        type: FETCH_LIST_JOB_APPLICED,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getListCVAppliced = (id) => async (dispatch) => {
  try {
    const response = await api.fetchListCVAppliced(id);
    dispatch({
      type: FETCH_LIST_CV_APPLICED,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataCompanyCard = (id = 1) => async (dispatch) => {
  try {
    if (id) {
      const { data } = await api.fetchListCVOfCadidate(id); // list cv
      const response = await api.fetchListJobAppliced(id); //list job applied

      dispatch({
        type: GET_DATA_COMPANY_CARD,
        payload: { data, response },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCVCadidate = (id) => async (dispatch) => {
  try {
    await api.deleteCV(id).then(() => {
      dispatch({
        type: DELETE_CV_CADIDATE,
        payload: id,
      });
    });
  } catch (err) {
    console.log(err);
  }
}

export const addCVCandidate = (data) => async (dispatch) => {
  try {
    await api.addCV(data)
    dispatch({
      type: TURN_OFF_MODAL
    });
  } catch (err) {
    console.log(err);
  }
}
