import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

interface HeaderProps {
	title: string;
}

const Header = (props: HeaderProps) => {
	const { title } = props;
	return (
		<Navbar bg="dark" variant="dark">
			<h1>{title}</h1>
			<LinkContainer exact to="/" className="ml-auto">
				<Navbar.Brand bsPrefix="logo">businext</Navbar.Brand>
			</LinkContainer>
		</Navbar>
	);
};

export default Header;
