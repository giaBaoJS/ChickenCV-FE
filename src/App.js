import React, { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { showHome } from "./configRoutes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./reset.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE_FROM_LOCAL } from "./constants";

function App() {
	let firstRender = true;
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (firstRender) {
			let expiration = localStorage.getItem("expiration");
			if (expiration && new Date() < new Date(expiration)) {
				dispatch({ type: SET_STATE_FROM_LOCAL });
			} else {
				localStorage.removeItem("token");
				localStorage.removeItem("expiration");
				localStorage.removeItem("user");
			}
			firstRender = false;
		}
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Switch>{showHome()}</Switch>
		</BrowserRouter>
	);
}

export default App;
