import { withRouter, RouteComponentProps } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const DemoHeader = (props: RouteComponentProps) => {
	return (
		<Navbar>
			<LinkContainer exact to="/">
				<Navbar.Brand>Businext</Navbar.Brand>
			</LinkContainer>
			{/* <LinkContainer exact to="/">
				<Nav.Link>Business Lookup</Nav.Link>
			</LinkContainer> */}
		</Navbar>
	);
};

export default withRouter(DemoHeader);
