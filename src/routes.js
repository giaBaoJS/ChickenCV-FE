import HomePage from "./pages/HomePage";
import Company from "./pages/Company";
import Profile from "./pages/Profile";
import JobDetails from "./pages/JobDetails";
import CompanyDetails from "./pages/CompanyDetails";
import FilterJobs from "./pages/FilterJobs";
import Login from "./pages/Login";
import SignupCandidate from "./pages/SignupCandidate";
import SignupCompany from "./pages/SignupCompany";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/company/", exact: false, component: Company },
  { path: "/profile", exact: false, component: Profile },
  { path: "/jobdetails/:id", exact: false, component: JobDetails },
  { path: "/companydetails/:id", exact: false, component: CompanyDetails },
  { path: "/filterjob", exact: false, component: FilterJobs },
  { path: "/login", exact: false, component: Login },
  { path: "/signup-candidate", exact: false, component: SignupCandidate },
  { path: "/signup-company", exact: false, component: SignupCompany },
];
