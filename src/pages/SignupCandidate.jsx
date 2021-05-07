import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signupCandidate } from "../actions/authAction";

export default function SignupCandidate() {
	const [error, setError] = useState(null);
	const history = useHistory();
	const dispatch = useDispatch();
	const {register,handleSubmit,formState:{errors}}=useForm();
	const onSubmit = (data)=>dispatch(signupCandidate(data, setError, successHandler))
	const successHandler= ()=>history.push("/login");

	return (
		<Container>
			{error?(<Alert variant="danger">{error}</Alert>):null}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label>Tên đăng nhập</Form.Label>
					<Form.Control type="text" placeholder="username"
						{...register("userName",{
							required: true,
							maxLength: 20,
							pattern: /^[A-Za-z0-9]+$/i
						})}
					/>
					{errors?.userName?.type === "required" && <Form.Text className="text-danger">Tên đăng nhập không thể để trống</Form.Text>}
					{errors?.userName?.type === "maxLength" && <Form.Text className="text-danger">Tên đăng nhập tối đa 20 ký tự</Form.Text>}
					{errors?.userName?.type === "pattern" && <Form.Text className="text-danger">Tên đăng nhập chỉ chứa chữ cái và chữ số</Form.Text>}
				</Form.Group>
				<Form.Group>
					<Form.Label>Mật khẩu</Form.Label>
					<Form.Control type="password" placeholder="********"
						{...register("password",{
							required: true,
							minLength: 6,
							maxLength: 20
						})}
					/>
					{errors?.password?.type === "required" && <Form.Text className="text-danger">Mật khẩu không thể để trống</Form.Text>}
					{errors?.password?.type === "minLength" && <Form.Text className="text-danger">Mật khẩu tối thiểu 6 ký tự</Form.Text>}
					{errors?.password?.type === "maxLength" && <Form.Text className="text-danger">Mật khẩu tối đa 20 ký tự</Form.Text>}
				</Form.Group>
				<Form.Group>
					<Form.Label>Tên</Form.Label>
					<Form.Control type="text"
						{...register("name",{
							required: true,
							minLength: 1,
							maxLength: 20,
							pattern: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i

						})}
					/>
					{errors?.name?.type === "required" && <Form.Text className="text-danger">Tên không thể để trống</Form.Text>}
					{errors?.name?.type === "minLength" && <Form.Text className="text-danger">Tên tối thiểu 1 ký tự</Form.Text>}
					{errors?.name?.type === "maxLength" && <Form.Text className="text-danger">Tên tối đa 20 ký tự</Form.Text>}
					{errors?.name?.type === "pattern" && <Form.Text className="text-danger">Tên chỉ chứa chữ cái và khoảng trắng</Form.Text>}
				</Form.Group>
				<Button variant="primary" type="submit">
					Đăng ký
				</Button>
				<Link to="/login">
					<div>
						<small>đăng nhập</small>
					</div>
				</Link>
			</Form>
		</Container>
	);
}
