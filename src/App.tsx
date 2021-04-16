import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import About from './pages/About';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Container from 'react-bootstrap/Container';
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
						<Route exact path="/insights" component={Insights} />
						<Route>Page not found!</Route>
					</Switch>
				</Container>
			</BrowserRouter>
		</div>
	);
};

export default App;
