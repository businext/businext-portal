import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import CreateInsights from './pages/CreateInsights';
import SearchInsights from './pages/SearchInsights';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<Container>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route path="/create" component={CreateInsights} />
						<Route path="/insights" component={SearchInsights} />
						<Route>Page not found!</Route>
					</Switch>
				</Container>
			</BrowserRouter>
		</div>
	);
};

export default App;
