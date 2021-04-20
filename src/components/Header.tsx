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
			<NavDropdown title="Businesses" id="basic-nav-dropdown">
				<LinkContainer exact to="/add">
					<NavDropdown.Item>Add</NavDropdown.Item>
				</LinkContainer>
				<LinkContainer exact to="/business">
					<NavDropdown.Item>Search</NavDropdown.Item>
				</LinkContainer>
			</NavDropdown>
		</Navbar>
	);
};

export default withRouter(Header);
