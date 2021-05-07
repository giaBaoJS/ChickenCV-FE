import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TURN_OFF_MODAL } from "../../constants";
import { useForm } from "react-hook-form";
import { createJob, updateJob } from "../../actions/jobsAction";
import Select from "react-select";
import Cities from "../../assets/cities";

const AddJobDes = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { typeForm } = useSelector((state) => state.profileReducer.modal);
  const { dataeditJob } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.authReducer);
console.log(dataeditJob);
  const option_locations = [...Cities];
  const [Location, setLocation] = useState(
    typeForm === "EDIT_JOB_DES"
      ? option_locations.find((opt) => opt.value === dataeditJob.location) //dataeditJob.location
      : option_locations[0].value
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (typeForm === "EDIT_JOB_DES") {
      dispatch(updateJob(dataeditJob.id, { ...data, Location: Location.value }));
    } else {
      dispatch(createJob({ ...data, Location: Location.value }, setError));
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error ? <p className="text-danger">{error}</p> : null}
      <Form.Group controlId="name">
        <Form.Label>Tên công việc</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name Job"
          defaultValue={typeForm === "EDIT_JOB_DES" ? dataeditJob.name : null}
          {...register("Name", {
            required: true,
          })}
        />
        {errors?.Name?.type === "required" && (
          <Form.Text className="text-danger">
            Tên công việc không thể để trống
          </Form.Text>
        )}
        {errors?.Name?.type === "pattern" && (
          <Form.Text className="text-danger">
            Tên công việc chỉ chứa chữ cái và chữ số
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="jobdes">
        <Form.Label>Mô tả công việc</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter..."
          defaultValue={
            typeForm === "EDIT_JOB_DES" ? dataeditJob.description : null
          }
          {...register("Description", {
            required: true,
          })}
        />
        {errors?.Description?.type === "required" && (
          <Form.Text className="text-danger">
            Mô tả công việc không thể để trống
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="required">
        <Form.Label>Yêu cầu ứng viên</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter..."
          defaultValue={
            typeForm === "EDIT_JOB_DES" ? dataeditJob.requirement : null
          }
          {...register("Requirement", {
            required: true,
          })}
        />
        {errors?.Requirement?.type === "required" && (
          <Form.Text className="text-danger">
            Yêu cầu công việc không thể để trống
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="benefit">
        <Form.Label>Quyền lợi</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter..."
          defaultValue={
            typeForm === "EDIT_JOB_DES" ? dataeditJob.benefit : null
          }
          {...register("Benefit", {
            required: true,
          })}
        />
        {errors?.Benefit?.type === "required" && (
          <Form.Text className="text-danger">
            Benefit không thể để trống
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="salary">
        <Form.Label>Lương</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter..."
          defaultValue={typeForm === "EDIT_JOB_DES" ? dataeditJob.salary : null}
          {...register("Salary", {
            required: true,
          })}
        />
        {errors?.Salary?.type === "required" && (
          <Form.Text className="text-danger">
            Lương không được để trống
          </Form.Text>
        )}
        {errors?.Name?.type === "pattern" && (
          <Form.Text className="text-danger">
            Tên công việc chỉ chứa chữ cái và chữ số
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Địa điểm</Form.Label>
        <Select
          options={option_locations}
          defaultValue={Location}
          onChange={(data) => setLocation(data)}
        />
        {errors?.Location?.type === "required" && (
          <Form.Text className="text-danger">
            Địa điểm không thể để trống
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="companyid">
        <Form.Control
          type="hidden"
          value={user.company.id}
          {...register("CompanyId", {})}
        />
      </Form.Group>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: TURN_OFF_MODAL })}
        className="mr-2"
      >
        Đóng
      </Button>
      <Button variant="primary" type="submit">
        Hoàn thành
      </Button>
    </Form>
  );
};

export default AddJobDes;
