import {
  GraphQLInt as IntType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const CalculatorPriceType = new ObjectType({
	name: 'CalculatorPrice',
	fields: {
		id: { type:  IntType },
    type: { type: StringType },
    order: { type: IntType },
    page: { type: IntType },
    price: { type: IntType },
	}
});

export default CalculatorPriceType;

