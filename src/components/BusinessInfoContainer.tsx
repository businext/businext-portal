import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { Business } from '../models/Business';
import { BooleanInferenceContainer } from './InferenceContainer';

interface BusinessInfoProps {
	business: Business;
}

const BusinessInfoContainer = (props: BusinessInfoProps) => {
	const {
		business: {
			name,
			location,
			inferences: { servesAlcohol },
		},
	} = props;
	return (
		<Container>
			<h2>{name}</h2>
			<p>{location}</p>
			<hr />
			<Accordion>
				<BooleanInferenceContainer title="Serves alcohol?" inference={servesAlcohol} />
				<BooleanInferenceContainer
					title="Does delivery?"
					inference={{
						insight: true,
						confidence: 0.4198374,
						evidence: {},
					}}
				/>
				<BooleanInferenceContainer
					title="Has bouncer?"
					inference={{
						insight: true,
						confidence: 0.6431532,
						evidence: {},
					}}
				/>
				<BooleanInferenceContainer
					title="Has live entertainment?"
					inference={{
						insight: true,
						confidence: 0.98432,
						evidence: {},
					}}
				/>
				<BooleanInferenceContainer
					title="Has patio?"
					inference={{
						insight: false,
						confidence: 0,
						evidence: {},
					}}
				/>
				<BooleanInferenceContainer
					title="Has deep fryer?"
					inference={{
						insight: false,
						confidence: 0.3124,
						evidence: {},
					}}
				/>
				<BooleanInferenceContainer
					title="Has fire extinguisher?"
					inference={{
						insight: true,
						confidence: 0.52861,
						evidence: {},
					}}
				/>
			</Accordion>
		</Container>
	);
};

export default BusinessInfoContainer;
