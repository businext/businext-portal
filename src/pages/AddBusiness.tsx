import { RouteComponentProps } from 'react-router-dom';
import { BusinessQuery } from '../models/Business';
import BusinessForm from '../components/BusinessForm';

const AddBusiness = (props: RouteComponentProps) => {
	const getInsights = (business: BusinessQuery) => {
		console.log(business);
	};

	return (
		<div>
			<h1>Add Business</h1>
			<BusinessForm onSubmit={getInsights} submitButtonText="Get Insights" />
		</div>
	);
};

export default AddBusiness;
