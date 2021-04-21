import { ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';

interface PageProps {
	children: ReactNode;
	title: string;
}

const Page = (props: PageProps) => {
	const { children, title } = props;
	return (
		<div className="fill d-flex flex-column">
			<Header title={title} />
			<Container fluid className="flex-grow-1">
				{children}
			</Container>
		</div>
	);
};

export default Page;
