import axios from "axios";

const url = 'https://localhost:44361/api/';
const jobApi = 'jobs';
const candidateApi = "candidates";
const cvApi = "cv";
const companyDetailApi = 'Company'
const authApi = "authenticate";
//Job
export const fetchJobs = () => axios.get(url + jobApi);
export const fetchAllJobs = (queryString) => axios.get(`${url + jobApi}${queryString}`);
export const fetchJobsOrderBy = (index) => axios.get(`${url + jobApi}?orderBy=${index}`);
export const fetchJobsByFilter = (index) => axios.get(`${url + jobApi}?dateIndication=${index}`);
export const createJob = (newJob) => axios.post(url + jobApi, newJob);
export const updateJob = (id, updatedJob) => axios.put(`${url + jobApi}/${id}`, updatedJob);
export const deleteJob = (id) => axios.delete(`${url + jobApi}/${id}`);


export const login = (loginModel) => axios.post(`${url + authApi}/login`, loginModel);
export const signupCandidate = (signupModel) => axios.post(`${url + authApi}/register-candidate`, signupModel);
export const signupCompany = (signupModel) => axios.post(`${url + authApi}/register-company`, signupModel);
export const fetchListCVOfCadidate = (id) => axios.get(`${url + cvApi}/${id}`);

export const deleteCV = (id) => axios.delete(`${url + cvApi}/${id}`);
export const addCV = (data) => axios.post(`${url + cvApi}`, data);
export const fetchListJobAppliced = (id) => axios.get(`${url + cvApi}/candidate/${id}`);
export const fetchListCVAppliced = (id) => axios.get(`${url + cvApi}/company/${id}`);

export const fetchInfoCompany = (id) => axios.get(`${url + companyDetailApi}/${id}`);
export const editInfoCompany = (id, data) => axios.put(`${url + companyDetailApi}/${id}`, data);
export const fetchInfoCandidate = (id) => axios.get(`${url + candidateApi}/${id}`);
export const editInfoCandidate = (id, data) => axios.put(`${url + candidateApi}/${id}`, data);

export const applyJob = (data) => axios.post(`${url + candidateApi}/applyforjob`, data)
export const cancelApply = (cvID, jobID) => axios.delete(`${url + candidateApi}/applyforjob/${cvID}/${jobID}`)

export const getCompanyById = (id) => axios.get(`${url + companyDetailApi}/${id}`);
export const getCompanyJobs = (companyId) => axios.get(`${url + jobApi}?companyId=${companyId}`);

export const getJobsById = (id) => axios.get(`${url + jobApi}/${id}`);
