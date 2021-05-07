import React from "react";
import { EDIT_INFO_CANDIDATE, EDIT_INFO_COMPANY, TURN_OFF_MODAL } from "../../constants";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editInfoCandidate, editInfoCompany } from "../../actions/authAction";
function EditInfoCadidate() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userEdit } = useSelector((state) => state.authReducer);
  const onSubmit = (data) => {
    dispatch(editInfoCandidate(userEdit.id, data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          defaultValue={userEdit.name}
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i
          })}
        />
        {errors?.name?.type === "required" && <Form.Text className="text-danger">Tên ứng cử viên không thể để trống</Form.Text>}
        {errors?.name?.type === "maxLength" && <Form.Text className="text-danger">Tên ứng cử viên tối đa 20 ký tự</Form.Text>}
        {errors?.name?.type === "pattern" && <Form.Text className="text-danger">Tên ứng cử viên chỉ chứa chữ cái và chữ số</Form.Text>}
      </Form.Group>
      <Button
        variant="secondary"
        onClick={() => dispatch({ type: TURN_OFF_MODAL })}
        className="mr-2"
      >
        Đóng
      </Button>
      <Button
        variant="primary"
        type="submit"
      >
        Hoàn thành
      </Button>
    </Form>
  );
}

export default EditInfoCadidate;
