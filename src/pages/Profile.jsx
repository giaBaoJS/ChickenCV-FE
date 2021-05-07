import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProFileInfo from "../components/profileInfo";
import ProfileTabContent from "../components/ProfileTabContents";
import ListCV from "../components/ProfileTabContents/ListCV";
import JobApplications from "../components/ProfileTabContents/JobApplications";
import ProfileTabs from "../components/ProfileTabs";

import CandidateAppliced from "../components/ProfileTabContents/CandidateAppliced";
import JobDescriptions from "../components/ProfileTabContents/JobDescriptions";
import ModalHOC from "../components/ModalHOC";

import AddJobDes from "../components/Form/AddJobDes";
import EditInfoCadidate from "../components/Form/EditInfoCadidate";
import EditInfoCompany from "../components/Form/EditInfoCompany";
import {
  ADD_CV,
  ADD_JOB_DES,
  CADIDATE_APPLICED,
  EDIT_INFO_CANDIDATE,
  EDIT_INFO_COMPANY,
  EDIT_JOB_DES,
  JOB_APPLICATION,
  JOB_DESCRIPTION,
  LIST_CV,
} from "../constants";
import AddCV from "../components/Form/AddCV";
import { useHistory } from "react-router";

const tabs = {
  cadidate: [LIST_CV, JOB_APPLICATION],
  company: [CADIDATE_APPLICED, JOB_DESCRIPTION],
};

const Profile = () => {
  let history = useHistory();
  const { user } = useSelector((state) => state.authReducer);
  const [tabActive, setTabActive] = useState(
    user?.roleIds[0] === 2 ? LIST_CV : CADIDATE_APPLICED
  );
  useEffect(() => {
    if (!localStorage.getItem("user")) history.push("/");
    else setTabActive(user?.roleIds[0] === 2 ? LIST_CV : CADIDATE_APPLICED);

  }, []);
  useEffect(() => {
    if (!localStorage.getItem("user")) history.push("/");
    else setTabActive(user?.roleIds[0] === 2 ? LIST_CV : CADIDATE_APPLICED);
  }, [user]);

  const CadidateShowTabContent = () => {
    switch (tabActive) {
      case LIST_CV:
        return ProfileTabContent(ListCV);
      case JOB_APPLICATION:
        return ProfileTabContent(JobApplications);
      default:
        return ProfileTabContent(ListCV);
    }
  };

  const CompanyShowTabContent = () => {
    switch (tabActive) {
      case JOB_APPLICATION:
        return ProfileTabContent(JobApplications);
      case CADIDATE_APPLICED:
        return ProfileTabContent(CandidateAppliced);
      case JOB_DESCRIPTION:
        return ProfileTabContent(JobDescriptions);
      default:
        return ProfileTabContent(JobApplications);
    }
  };

  const { typeForm } = useSelector((state) => state.profileReducer.modal);
  const ModalShowTabContent = () => {
    switch (typeForm) {
      case EDIT_JOB_DES:
        return ModalHOC(AddJobDes);
      case ADD_JOB_DES:
        return ModalHOC(AddJobDes);
      case EDIT_INFO_CANDIDATE:
        return ModalHOC(EditInfoCadidate);
      case EDIT_INFO_COMPANY:
        return ModalHOC(EditInfoCompany);
      case ADD_CV:
        return ModalHOC(AddCV);
    }
  };

  const Component =
    user?.roleIds[0] === 2 ? CadidateShowTabContent() : CompanyShowTabContent();
  const Modal = ModalShowTabContent();

  return (
    <>
      {user && (
        <>
          <ProFileInfo />
          <ProfileTabs
            setTabActive={setTabActive}
            tabActive={tabActive}
            tabs={user?.roleIds[0] === 2 ? tabs.cadidate : tabs.company}
          />
          <Component />
          <Modal />
        </>
      )}
    </>
  );
};

export default Profile;
