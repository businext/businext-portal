import { withRouter, RouteComponentProps } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

type HeaderProps = RouteComponentProps & {
	title?: string;
};

const Header = (props: HeaderProps) => {
	return (
		<Navbar>
			<LinkContainer to="/">
				<Navbar.Brand>Businext</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav>
					<LinkContainer to="/about">
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/insights">
						<Nav.Link>Search</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Header);
