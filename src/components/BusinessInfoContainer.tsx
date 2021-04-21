import Container from 'react-bootstrap/Container';
import { Business } from '../models/Business';

interface BusinessInfoProps {
	business: Business;
}

const BusinessInfoContainer = (props: BusinessInfoProps) => {
	const {
		business: {
			name,
			location,
			inferences: {
				servesAlcohol: { insight: servesAlcohol },
			},
		},
	} = props;
	return (
		<Container>
			<h2>{name}</h2>
			<h3>{location}</h3>
			<h4>{servesAlcohol ? 'Serves alcohol' : 'Does not serve alcohol'}</h4>
		</Container>
	);
};

export default BusinessInfoContainer;
