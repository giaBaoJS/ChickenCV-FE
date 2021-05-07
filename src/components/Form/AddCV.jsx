import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TURN_OFF_MODAL } from "../../constants";
import { useForm } from "react-hook-form";
import { addCVCandidate } from "../../actions/cvAction";
const AddCV = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useSelector((state) => state.authReducer);
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("candidateId", user?.candidate.id);
    formData.append("file", data?.files[0]);
    formData.append("name", data.name);
    dispatch(addCVCandidate(formData));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Title CV</Form.Label>
        <Form.Control
          type="text"
          placeholder="titleCV"
          {...register("name", {
            required: true,
          })}
        />
        {errors?.name?.type === "required" && (
          <Form.Text className="text-danger">Vui lòng điền tiêu đề</Form.Text>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>File CV</Form.Label>
        <Form.Control
          type="file"
          {...register("files", {
            required: true,
          })}
        />
        {errors?.files?.type === "required" && (
          <Form.Text className="text-danger">Vui lòng upload CV</Form.Text>
        )}
      </Form.Group>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: TURN_OFF_MODAL })}
        className="mr-2"
      >
        Đóng
      </Button>
      <Button variant="primary" type="submit">
        Thêm CV
      </Button>
    </Form>
  );
};

export default AddCV;
