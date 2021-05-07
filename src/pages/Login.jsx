import React, {useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "./Login.scss";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authAction";

export default function Login() {
	const [error, setError] = useState(null);
	const user = useSelector((state) => state.authReducer.user);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		dispatch(login(data, setError));
	};

	return !user?
	(
		<Container>
			{error?(<Alert variant="danger">{error}</Alert>):null}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label>Tên đăng nhập</Form.Label>
					<Form.Control
						type="text"
						placeholder="username"
						{...register("username", { required: true })}
					/>
					{errors?.username?.type === "required" && <Form.Text className="text-danger">Tên đăng nhập không thể để trống</Form.Text>}
				</Form.Group>
				<Form.Group>
					<Form.Label>Mật khẩu</Form.Label>
					<Form.Control
						type="password"
						placeholder="********"
						{...register("password", { required: true })}
					/>
					{errors?.password?.type === "required" && <Form.Text className="text-danger">Mật khẩu không thể để trống</Form.Text>}
				</Form.Group>
				<Button variant="primary" type="submit">
					Đăng nhập
				</Button>
			</Form>
		</Container>
	):
	(<Redirect to="/"/>);
}
