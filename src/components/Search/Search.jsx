import { useState } from "react";
import {
	Col,
	Container,
	Row,
	Form,
	Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import Select from "react-select";
import "./Search.scss";
import Cities from "../../assets/cities";

const Search = (props) => {
	const [keyWord, setKeyWord] = useState(props.keyWord ?? "");
	const [location, setLocation] = useState(props.location ?? "");
	const [orderBy, setOrderBy] = useState(props.orderBy ?? "0");
    const option_locations = [{ value: "", label: "Địa chỉ..." },...Cities];

	const option_order_by = [
		{ value: "0", label: "Sắp xếp theo" },
		{ value: "1", label: "Ngày giảm dần" },
		{ value: "2", label: "Ngày tăng dần" },
		{ value: "3", label: "Lương giảm dần" },
		{ value: "4", label: "Lương tăng dần" },
	];

	function handleSubmit(event) {
    if(props.onSubmit)
      props.onSubmit(event, {keyWord, location, orderBy});
    else event.preventDefault();
	}

	return (
		<>
			<Container className="searchBar" fuild="true">
				<Form onSubmit={handleSubmit}>
					<Row>
						<Col xs={6}>
							<Form.Control
								size="md"
								type="text"
								placeholder="Từ khóa"
								value={keyWord}
								onChange={(e) => setKeyWord(e.target.value)}
							/>
						</Col>
						<Col xs={2}>
							<Select
								options={option_locations}
								defaultValue={option_locations.find(
									(opt) => opt.value === location
								)}
								onChange={(data) => setLocation(data.value)}
							/>
						</Col>
						<Col xs={2}>
							<Select
								options={option_order_by}
								defaultValue={option_order_by.find(
									(opt) => opt.value === orderBy
								)}
								onChange={(data) => setOrderBy(data.value)}
							/>
						</Col>
						<Col xs={2}>
							<Button variant="success" type="submit">
								Tìm kiếm
							</Button>
						</Col>
					</Row>
				</Form>
			</Container>
		</>
	);
};

export default Search;
