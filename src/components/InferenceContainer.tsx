import { BooleanInsight as BooleanInference, ImageEvidence } from '../graphql/generatedTypes';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ProgressBar from 'react-bootstrap/ProgressBar';

interface ImageEvidenceCardProps {
	evidence: ImageEvidence;
}

const ImageEvidenceCard = (props: ImageEvidenceCardProps) => {
	const {
		evidence: {
			reason,
			source: { origin: { source }}
		}
	} = props;

	return (
		<Card style={{ width: '16rem' }} className="m-1" border="light">
			<Card.Img variant="top" src={source} />
			<Card.Body>
				<Card.Text>{reason}</Card.Text>
			</Card.Body>
		</Card>
	)
}

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
			evidence: { images: imageEvidence },
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
			<Accordion.Collapse as={Card.Body} eventKey={title} className="p-3">
				<div>
					<b>{`${Math.round(percent)}% confidence.`}</b>
					<p className="mb-0">{imageEvidence ? `${imageEvidence.length} pieces of evidence found.` : 'No evidence found.'}</p>
					{imageEvidence && (
						<CardDeck className="mx-0 mb-0 mt-3">
							{imageEvidence.map(
								(evidence) => <ImageEvidenceCard evidence={evidence} />
							)}
						</CardDeck>
					)}
				</div>
			</Accordion.Collapse>
		</Card>
	);
};
