import { ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BusinessQuery } from '../models/Business';

interface BusinessFormProps {
	query: BusinessQuery;
	onChange?: (query: BusinessQuery) => void;
	onSubmit: (query: BusinessQuery) => void;
	submitButtonText: string;
}

const BusinessForm = (props: BusinessFormProps) => {
	const { query, onChange, onSubmit, submitButtonText } = props;

	const onFormTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		// TODO
		if (onChange) {
			onChange({
				...query,
				[name]: value,
			});
		}
	};

	return (
		<Form>
			<Form.Group>
				<Form.Label>Business Name</Form.Label>
				<Form.Control
					name="name"
					value={query.name}
					type="text"
					required
					placeholder="Name"
					onChange={onFormTextChange}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Business Location</Form.Label>
				<Form.Text>
					This can be an address, or the name of a place. Please be as specific as possible.
				</Form.Text>
				<Form.Control
					name="location"
					value={query.location}
					type="text"
					required
					placeholder="Location"
					onChange={onFormTextChange}
				/>
			</Form.Group>

			<Button variant="primary" type="button" onClick={(_) => onSubmit(query)}>
				{submitButtonText}
			</Button>
		</Form>
	);
};

export default BusinessForm;
