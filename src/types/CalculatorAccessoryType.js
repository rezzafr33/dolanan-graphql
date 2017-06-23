import {
  GraphQLInt as IntType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

import MediaType from './MediaType';

const CalculatorAccessoryType = new ObjectType({
	name: 'CalculatorAccessory',
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

export default CalculatorAccessoryType;

