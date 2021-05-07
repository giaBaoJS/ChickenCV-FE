import { getListCVAppliced } from "../actions/cvAction";
import { DELETE_JOB, FETCH_LIST_CV_APPLICED } from "../constants";
import { GET_COMPANY_BY_ID ,CANCEL_APPLY_OF_CANDIDATE } from "../constants";

export const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LIST_CV_APPLICED:
      return { ...state, jobAppliced: action.payload.items };
    case GET_COMPANY_BY_ID:
      state.companyAddress = action.data.address;
      state.companyName = action.data.name;
      state.jobsCompany = action.listCompanyJobs;
      return { ...state };
    case DELETE_JOB:
      let items = state.jobsCompany.items.filter((job) => job.id !== action.payload);
      return {
        ...state,
        jobsCompany: {items:items, totalItems : items.length}
      };
    case CANCEL_APPLY_OF_CANDIDATE:
      action.dispatch(getListCVAppliced(action.id))
      return {...state}
    default:
      return { ...state };
  }
};
