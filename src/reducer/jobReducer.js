import {
  CREATE_JOB,
  GET_DATA_EDIT,
  FETCH_ALL_JOB,
  UPDATE_JOB,
  GET_JOB_BY_ID,
  GET_JOB_BY_FILTER,
} from "../constants";

let initialState = {
  jobs: [],
  jobsByDate: [],
  jobsBySalary: [],
  jobDetail: {},
  filterJobs: [],
  dataeditJob: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_JOB:
      return {
        ...state,
        jobs: action.payload.data,
        jobsByDate: action.payload.databyDate,
        jobsBySalary: action.payload.databySalary,
      };
    case GET_JOB_BY_ID:
      return {
        ...state,
        jobDetail: action.payload,
      };
    case GET_JOB_BY_FILTER:
      return {
        ...state,
        filterJobs: action.payload.databyFilter,
      };
    case CREATE_JOB:
      return { ...state, jobs: action.payload };
    case GET_DATA_EDIT:
      return { ...state, dataeditJob: action.payload };
    case UPDATE_JOB:
      return {
        ...state,
        jobs: state?.jobs?.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    default:
      return state;
  }
};
