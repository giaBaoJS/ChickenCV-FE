import { getDataCompanyCard, getListJobAppliced } from "../actions/cvAction";
import {
  DELETE_CV_CADIDATE,
  FETCH_INFO_CANDIDATE,
  FETCH_LIST_CV_OF_CADIDATE,
  FETCH_LIST_JOB_APPLICED,
  GET_DATA_COMPANY_CARD,
  APPLY_JOB,
  CANCEL_APPLY
} from "../constants";

let initialState = {
  id: 1,
  name: "",
  listCV: [],
  cvAppliced: [],
};
export const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFO_CANDIDATE:
      const { id, name } = action.payload;
      return { ...state, id, name };
    case FETCH_LIST_CV_OF_CADIDATE:
      return { ...state, listCV: action.payload.items };
    case FETCH_LIST_JOB_APPLICED:
      return { ...state, cvAppliced: action.payload.items };
    case GET_DATA_COMPANY_CARD:
      return { ...state, listCV: action.payload.data.items,cvAppliced: action.payload.response.data.items };
    case APPLY_JOB:
      action.dispatch(getDataCompanyCard(action.user.id))
    case CANCEL_APPLY:
      action.dispatch(getListJobAppliced(action.id))
    case DELETE_CV_CADIDATE:
      const listCV = [...state.listCV];
      const index = listCV.findIndex(item => item.id === action.payload);
      if (index !== -1) listCV.splice(index, 1);
      state.listCV = listCV;
      return { ...state }
    default:
      return { ...state };
  }
};
