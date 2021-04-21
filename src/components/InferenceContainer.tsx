import { BooleanInsight as BooleanInference } from '../graphql/generatedTypes';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

interface BooleanInferenceContainerProps {
	title: string;
	inference: BooleanInference;
}

export const BooleanInferenceContainer = (props: BooleanInferenceContainerProps) => {
	const {
		title,
		inference: {
			insight,
			confidence,
			evidence: { images },
		},
	} = props;
	const percent: number = insight ? confidence * 100 : 0;
	return (
		<Card className="inference mb-3">
			<Accordion.Toggle as={Card.Header} eventKey={title}>
				<div className="d-flex flex-row justify-content-center align-items-center">
					<h3 className="m-0">{title}</h3>
					<ProgressBar now={percent} className="flex-grow-1 ml-3" />
				</div>
			</Accordion.Toggle>
			<Accordion.Collapse as={Card.Body} eventKey={title} className="px-3 pt-3">
				<div>
					<b>{`${Math.round(percent)}% confidence.`}</b>
					<p>{images ? `${images.length} pieces of evidence found.` : 'No evidence found.'}</p>
				</div>
			</Accordion.Collapse>
		</Card>
	);
};
