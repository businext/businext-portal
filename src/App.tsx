import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LookupBusiness from './pages/BusinessLookup';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/" component={LookupBusiness} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
