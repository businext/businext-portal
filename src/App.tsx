import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/" exact>
						<Header title="Welcome" />
					</Route>
					<Route path="/about" exact>
						<Header title="About Us" />
					</Route>
					<Route path="/insights" exact>
						<Header title="Search Insights" />
					</Route>
					<Route>
						<p>Page not found!</p>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
