import { withRouter, RouteComponentProps } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = (props: RouteComponentProps) => {
	return (
		<Navbar>
			<LinkContainer exact to="/">
				<Navbar.Brand>Businext</Navbar.Brand>
			</LinkContainer>
			<LinkContainer exact to="/about">
				<Nav.Link>About</Nav.Link>
			</LinkContainer>
			<NavDropdown title="Insights" id="basic-nav-dropdown">
				<LinkContainer exact to="/create">
					<NavDropdown.Item>Create Insights</NavDropdown.Item>
				</LinkContainer>
				<LinkContainer exact to="/insights">
					<NavDropdown.Item>Search Insights</NavDropdown.Item>
				</LinkContainer>
			</NavDropdown>
		</Navbar>
	);
};

export default withRouter(Header);
