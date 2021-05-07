import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getJobsById } from "../actions/jobsAction";
import InfoRecruid from "../components/InfoRecruid/InfoRecruid";
import JobCard from "../components/JobCard/JobCard";
import { useSelector } from "react-redux";
const JobDetails = (props) => {
  let dispatch = useDispatch();
  let { id } = useParams();
  const jobs = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(getJobsById(id));
  }, [jobs.jobDetail["id"],id]);
  return (
    <>
      <JobCard
        name={jobs.jobDetail.name}
        companyName={jobs.jobDetail.companyName}
        dateCreated={jobs.jobDetail.dateCreated}
        id={id}
      ></JobCard>
      <br>{props.name}</br>
      <InfoRecruid
      name={jobs.jobDetail.name}
      description={jobs.jobDetail.description}
      requirement={jobs.jobDetail.requirement}
      benefit={jobs.jobDetail.benefit}
      companyName={jobs.jobDetail.companyName}
      companyId={jobs.jobDetail.companyId}></InfoRecruid>
    </>
  );
};

export default JobDetails;
