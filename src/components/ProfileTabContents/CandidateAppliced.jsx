import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCVAppliced } from "../../actions/cvAction";
import CVAppliced from "../CVAppliced";

const CandidateAppliced = () => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { jobAppliced } = useSelector((state) => state.companyReducer);
  useEffect(() => {
    dispatch(getListCVAppliced(user?.company.id));
  }, []);
  return (
    <div className="appliced">
      {jobAppliced &&
        jobAppliced.map((item, index) => (
          <CVAppliced key={index} data={item} />
        ))}
    </div>
  );
};

export default CandidateAppliced;
