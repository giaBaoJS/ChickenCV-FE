import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListJobAppliced } from "../../actions/cvAction";
import JobApplyItem from "../JobApplyItem";

const JobApplications = () => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { cvAppliced } = useSelector((state) => state.candidateReducer);
  useEffect(() => {
    dispatch(getListJobAppliced(user?.candidate.id));
  }, []);
  return (
    <div className="your-apply">
      {cvAppliced &&
        cvAppliced.map((item, index) => (
          <JobApplyItem key={index} data={item} />
        ))}
    </div>
  );
};

export default JobApplications;
