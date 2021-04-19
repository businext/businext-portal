import { useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BusinessQuery } from '../models/Business';

interface BusinessFormProps {
	onSubmit: (business: BusinessQuery) => void;
	submitButtonText: string;
}

const BusinessForm = (props: BusinessFormProps) => {
	const { onSubmit, submitButtonText } = props;

	const [business, setBusiness] = useState<BusinessQuery>({
		name: '',
		location: '',
	});
	const onFormTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setBusiness({
			...business,
			[name]: value,
		});
	};

	return (
		<Form>
			<Form.Group>
				<Form.Label>Business Name</Form.Label>
				<Form.Control
					name="name"
					value={business.name}
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
					value={business.location}
					type="text"
					required
					placeholder="Location"
					onChange={onFormTextChange}
				/>
			</Form.Group>

			<Button variant="primary" type="button" onClick={(_) => onSubmit(business)}>
				{submitButtonText}
			</Button>
		</Form>
	);
};

export default BusinessForm;
