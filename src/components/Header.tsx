import { withRouter, RouteComponentProps } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props: RouteComponentProps) => {
	return (
		<Navbar>
			<LinkContainer exact to="/">
				<Navbar.Brand>Businext</Navbar.Brand>
			</LinkContainer>
			<LinkContainer exact to="/about">
				<Nav.Link>About</Nav.Link>
			</LinkContainer>
			<LinkContainer exact to="/insights">
				<Nav.Link>Insights</Nav.Link>
			</LinkContainer>
		</Navbar>
	);
};

export default withRouter(Header);
