import React from "react";
import { EDIT_INFO_CANDIDATE, EDIT_INFO_COMPANY, TURN_OFF_MODAL } from "../../constants";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editInfoCandidate, editInfoCompany } from "../../actions/authAction";
function EditInfoCompany() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userEdit } = useSelector((state) => state.authReducer);
  const onSubmit = (data) => {
    dispatch(editInfoCompany(userEdit.id, data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Tên doanh nghiệp</Form.Label>
        <Form.Control type="text"
          defaultValue={userEdit.name}
          {...register("name", {
            required: true,
            minLength: 2,
            maxLength: 20,
            pattern: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i

          })}
        />
        {errors?.name?.type === "required" && <Form.Text className="text-danger">Tên không thể để trống</Form.Text>}
        {errors?.name?.type === "minLength" && <Form.Text className="text-danger">Tên tối thiểu 2 ký tự</Form.Text>}
        {errors?.name?.type === "maxLength" && <Form.Text className="text-danger">Tên tối đa 20 ký tự</Form.Text>}
        {errors?.name?.type === "pattern" && <Form.Text className="text-danger">Tên chỉ chứa chữ cái, chữ số và khoảng trắng</Form.Text>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control type="text" defaultValue={userEdit.address}
          {...register("address", {
            required: true,
            minLength: 2,
            maxLength: 20,
            pattern: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i

          })}
        />
        {errors?.address?.type === "required" && <Form.Text className="text-danger">Địa chỉ không thể để trống</Form.Text>}
        {errors?.address?.type === "minLength" && <Form.Text className="text-danger">Địa chỉ tối thiểu 2 ký tự</Form.Text>}
        {errors?.address?.type === "maxLength" && <Form.Text className="text-danger">Địa chỉ tối đa 20 ký tự</Form.Text>}
        {errors?.address?.type === "pattern" && <Form.Text className="text-danger">Địa chỉ chỉ chứa chữ cái, chữ số và khoảng trắng</Form.Text>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control type="text"
          defaultValue={userEdit.phoneNumber}
          {...register("phoneNumber", {
            required: true,
            minLength: 7,
            maxLength: 13,
            pattern: /^[0-9]+$/i
          })}
        />
        {errors?.phoneNumber?.type === "required" && <Form.Text className="text-danger">Số điện thoại không thể để trống</Form.Text>}
        {errors?.phoneNumber?.type === "minLength" && <Form.Text className="text-danger">Số điện thoại tối thiểu 7 ký tự</Form.Text>}
        {errors?.phoneNumber?.type === "maxLength" && <Form.Text className="text-danger">Số điện thoại tối đa 13 ký tự</Form.Text>}
        {errors?.phoneNumber?.type === "pattern" && <Form.Text className="text-danger">Số điện thoại chỉ chứa chữ số</Form.Text>}
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

export default EditInfoCompany;
