import { withRouter, RouteComponentProps } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props: RouteComponentProps) => {
	return (
		<Navbar>
			<LinkContainer to="/">
				<Navbar.Brand>Businext</Navbar.Brand>
			</LinkContainer>
			<LinkContainer to="/about" exact>
				<Nav.Link>About</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/insights" exact>
				<Nav.Link>Insights</Nav.Link>
			</LinkContainer>
		</Navbar>
	);
};

export default withRouter(Header);
