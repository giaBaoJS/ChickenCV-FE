import * as api from "../api";
import {
  FETCH_INFO_CANDIDATE,
  APPLY_JOB,
  CANCEL_APPLY,
} from "../constants";

export const getCadidateById = (id) => async (dispatch) => {
  try {
    const response = await api.fetchInfoCandidate(id);
    dispatch({
      type: FETCH_INFO_CANDIDATE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const applyJob = (data,user) => async (dispatch) => {
  try {
    const res = await api.applyJob(data);
    if (res.status == 200) {
      dispatch({
        type: APPLY_JOB,
        dispatch: dispatch,
        user: user.candidate
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const cancelApply = (id=1,cvID, jobID) => async (dispatch) => {
  try {
    const res = api.cancelApply(cvID, jobID);
    res.then((result) => {
      if (result.status == 200) {
        dispatch({
          type: CANCEL_APPLY,
          dispatch: dispatch,
          id:id
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
