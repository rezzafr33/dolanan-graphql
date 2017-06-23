import {
  GraphQLInt as IntType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

import MediaType from './MediaType';

const CalculatorCoverType = new ObjectType({
	name: 'CalculatorCover',
	fields: {
		id: { type:  IntType },
		name: { type: StringType },
    price: { type: IntType },
		media: {
			type: MediaType,
      resolve: obj => obj.media
		}
	}
});

export default CalculatorCoverType;

