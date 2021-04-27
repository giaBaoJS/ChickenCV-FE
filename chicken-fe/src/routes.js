import HomePage from './pages/HomePage';
import Company from './template/Company';


export const routesHome = [
	{ path: '/', exact: true, component: HomePage },
	{ path: '/company', exact: false, component: Company },

];