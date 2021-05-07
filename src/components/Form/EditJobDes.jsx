import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { TURN_OFF_MODAL } from "../../constants";
const EditJobDes = () => {
  const dispatch = useDispatch();
  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Địa chỉ Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-warning">Email không hợp lệ, vui lòng kiểm tra lại</Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="jobdes">
        <Form.Label>Mô tả công việc</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="required">
        <Form.Label>Yêu cầu ứng viên</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="benefit">
        <Form.Label>Quyền lợi</Form.Label>
        <Form.Control as="textarea" rows={3} />
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
        onClick={() => dispatch({ type: TURN_OFF_MODAL })}
      >
        Hoàn thành
      </Button>
    </Form>
  );
};

export default EditJobDes;
