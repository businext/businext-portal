import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { RouteComponentProps } from 'react-router-dom';
import BusinessForm from '../components/BusinessForm';
import BusinessInfoContainer from '../components/BusinessInfoContainer';
import { BusinessInferences, QueryGetBusinessInfoArgs } from '../graphql/generatedTypes';
import { BusinessQuery } from '../models/Business';

type GetBusinessInfoParams = QueryGetBusinessInfoArgs;
type GetBusinessInfoResult = {
	getBusinessInfo: BusinessInferences;
};

const GET_BUSINESS_INFO = gql`
	query GetBusinessInfo($businessInfoInput: BusinessInfoInput!) {
		getBusinessInfo(businessInfoInput: $businessInfoInput) {
			servesAlcohol {
				insight
				confidence
				evidence {
					images {
						source {
							origin {
								source
								provider
							}
							extractions {
								assignedLabels {
									confidence
									description
									topicality
								}
								detectedObjects {
									confidence
									objectName
									boundingPolygon {
										x
										y
									}
								}
							}
						}
						reason
					}
				}
			}
		}
	}
`;

const BusinessLookup = (props: RouteComponentProps) => {
	const [getBusinessInfo, { loading, data }] = useLazyQuery<GetBusinessInfoResult, GetBusinessInfoParams>(
		GET_BUSINESS_INFO
	);

	const [businessQuery, setBusinessQuery] = useState<BusinessQuery>({
		name: '',
		location: '',
	});

	const onSubmit = (query: BusinessQuery) => {
		setBusinessQuery(query);
		const businessInfoInput = {
			name: query.name,
			address: query.location,
		};
		getBusinessInfo({
			variables: {
				businessInfoInput,
			},
		});
	};

	return (
		<div>
			<h1>Business Lookup</h1>
			<BusinessForm onSubmit={onSubmit} submitButtonText="Get Insights" />
			<hr />
			<Container>
				{loading && (
					<div className="d-flex justify-content-center">
						<Spinner animation="border" />
					</div>
				)}
				{data && (
					<BusinessInfoContainer
						business={{
							name: businessQuery.name,
							location: businessQuery.location,
							inferences: data.getBusinessInfo,
						}}
					/>
				)}
			</Container>
		</div>
	);
};

export default BusinessLookup;
