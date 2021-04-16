import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route
						path="/" exact
						component={() => <Header title="Welcome"/>}
					/>
					<Route
						path="/insights" exact
						component={() => <Header title="Search Insights"/>}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
