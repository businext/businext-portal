import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import LookupBusiness from './pages/BusinessLookup';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<Container>
					<Switch>
						<Route path="/" component={LookupBusiness} />
					</Switch>
				</Container>
			</BrowserRouter>
		</div>
	);
};

export default App;
