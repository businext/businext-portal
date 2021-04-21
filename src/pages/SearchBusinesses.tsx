import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BusinessQuery } from '../models/Business';
import BusinessForm from '../components/BusinessForm';

const SearchBusinesses = (props: RouteComponentProps) => {
	const getInsights = (business: BusinessQuery) => {
		console.log(business);
	};

	const [businessQuery, setBusinessQuery] = useState<BusinessQuery>({
		name: '',
		location: '',
	});

	return (
		<div>
			<h1>Search Businesses</h1>
			<BusinessForm
				query={businessQuery}
				onChange={setBusinessQuery}
				onSubmit={getInsights} submitButtonText="Find Businesses"
			/>
		</div>
	);
};

export default SearchBusinesses;
