import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import jobs from "./jobReducer";
import { companyReducer } from "./companyReducer";
import { candidateReducer } from "./candidateReducer";
import { authReducer } from "./authReducer";
export default combineReducers({
  profileReducer,
  companyReducer,
  candidateReducer,
  jobs,
  authReducer
});
