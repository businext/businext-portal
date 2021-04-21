import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { RouteComponentProps } from 'react-router-dom';
import BusinessForm from '../components/BusinessForm';
import BusinessInfoContainer from '../components/BusinessInfoContainer';
import { BusinessInferences, QueryGetBusinessInfoArgs } from '../graphql/generatedTypes';
import { BusinessQuery } from '../models/Business';
import Page from '../components/Page';

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
		<Page title="Business Lookup">
			<Row className="fill">
				<Col className="p-3 col-md-4 sidebar">
					<BusinessForm onSubmit={onSubmit} submitButtonText="Get Insights" />
				</Col>
				<Col className="p-3 col-md-8">
					{loading && (
						<div className="d-flex fill justify-content-center align-items-center">
							<Spinner animation="border" role="status" className="loading" />
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
				</Col>
			</Row>
		</Page>
	);
};

export default BusinessLookup;
