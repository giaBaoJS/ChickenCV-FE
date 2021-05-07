import * as api from "../api";

import { DELETE_JOB, GET_COMPANY_BY_ID,CANCEL_APPLY_OF_CANDIDATE } from "../constants/index";

export const getCompanyById = (id) => async (dispatch) => {
  try {
    // let company = []
    // let listCompanyJobs = []
    if(id){
      Promise.all([api.getCompanyById(id), api.getCompanyJobs(id)]).then(
        (values) => {
          dispatch({
            type: GET_COMPANY_BY_ID,
            data: values[0].data,
            listCompanyJobs: values[1].data,
          });
        }
      );
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteJob = (id) => async (dispatch) => {
  try {
    await api.deleteJob(id);

    dispatch({ type: DELETE_JOB, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const cancelApplyOfCandidate = (id,cvID,jobID) => async (dispatch) => {
  try {
    const res = api.cancelApply(cvID, jobID);
    res.then((result) => {
      if (result.status == 200) {
        dispatch({
          type: CANCEL_APPLY_OF_CANDIDATE,
          dispatch: dispatch,
          id:id
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}