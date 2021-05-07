import * as api from "../api";
import {
  FETCH_ALL_JOB,
  CREATE_JOB,
  UPDATE_JOB,
  GET_JOB_BY_ID,
  TURN_OFF_MODAL,
  GET_JOB_BY_FILTER,
} from "../constants/index";
//Action Get Job
export const getJobsByDate = (index) => async (dispatch) => {
  try {
    const { data: databyDate } = await api.fetchJobsOrderBy(index);
    dispatch({
      type: FETCH_ALL_JOB,
      payload: {
        databyDate: databyDate.items,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getJobsByFilter = (querystring) => async (dispatch) => {
  try {
    const { data: databyFilter } = await api.fetchAllJobs(querystring);
    dispatch({
      type: GET_JOB_BY_FILTER,
      payload: {
        databyFilter: databyFilter.items,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const getJobsBySalary = (index) => async (dispatch) => {
  try {
    const { data: databySalary } = await api.fetchJobsOrderBy(index);
    dispatch({
      type: FETCH_ALL_JOB,
      payload: {
        databySalary: databySalary.items,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataHomePage = () => async (dispatch) => {
  try {
    const { data: databyDate } = await api.fetchJobsOrderBy(1);
    const { data: databySalary } = await api.fetchJobsOrderBy(3);
    dispatch({
      type: FETCH_ALL_JOB,
      payload: {
        databyDate: databyDate.items,
        databySalary: databySalary.items,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getJobsById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getJobsById(id);
    dispatch({
      type: GET_JOB_BY_ID,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createJob = (createModel, errorHandler) => async (dispatch) => {
  try {
    const { data } = await api.createJob(createModel);
    dispatch({
      type: TURN_OFF_MODAL,
    });
    dispatch({
      type: CREATE_JOB,
      payload: data,
    });
  } catch (error) {
    if (errorHandler) console.log(error.message);
  }
};

export const updateJob = (id, job) => async (dispatch) => {
  console.log(job);
  try {
    const { data } = await api.updateJob(id, job);
    dispatch({
      type: TURN_OFF_MODAL,
    });
    dispatch({
      type: UPDATE_JOB,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
