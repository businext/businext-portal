import { BusinessInferences } from '../graphql/generatedTypes';

export interface Business {
	name: string;
	location: string;
	inferences: BusinessInferences;
}

export interface BusinessQuery {
	name: string;
	location: string;
}
