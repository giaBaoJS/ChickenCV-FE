import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routesHome } from './routes';
import HomeTemplate from './template/HomeTemplate';
const showHome = () => {
	if (routesHome && routesHome.length) {
		return routesHome.map((item, index) => {
			return <HomeTemplate key={index} path={item.path} exact={item.exact} Component={item.component} />;
		});
	}
};
function App() {
  return (
		<BrowserRouter>
			<div className="App">
				<Switch >
					{showHome()}
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
