import {
  GraphQLInt as IntType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

import MediaType from './MediaType';

const CalculatorTypeType = new ObjectType({
	name: 'CalculatorType',
	fields: {
		id: { type:  IntType },
		name: { type: StringType },
    size: { type: StringType },
		media: {
			type: MediaType,
      resolve: obj => obj.media
		}
	}
});

export default CalculatorTypeType;

