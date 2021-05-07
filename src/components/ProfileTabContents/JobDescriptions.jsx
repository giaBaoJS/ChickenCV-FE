import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyById } from "../../actions/companyAction";
import { ADD_JOB_DES, TURN_ON_MODAL } from "../../constants";
import JobDesItem from "../JobDesItem";

const JobDescriptions = () => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { jobsCompany } = useSelector((state) => state.companyReducer);
  useEffect(() => {
    dispatch(getCompanyById(user?.company.id));
  }, []);
  return (
    <div className="your-apply">
      <Button
        variant="success mb-3"
        onClick={() =>
          dispatch({
            type: TURN_ON_MODAL,
            payload: ADD_JOB_DES,
          })
        }
      >
        Thêm công việc
      </Button>

      {jobsCompany &&
        jobsCompany.items.map((item, index) => (
          <JobDesItem key={index} data={item} />
        ))}
    </div>
  );
};

export default JobDescriptions;
