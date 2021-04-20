import { RouteComponentProps } from 'react-router-dom';
import { BusinessQuery } from '../models/Business';
import BusinessForm from '../components/BusinessForm';

const SearchBusinesses = (props: RouteComponentProps) => {
	const getInsights = (business: BusinessQuery) => {
		console.log(business);
	};

	return (
		<div>
			<h1>Search Businesses</h1>
			<BusinessForm onSubmit={getInsights} submitButtonText="Find Businesses" />
		</div>
	);
};

export default SearchBusinesses;
