import {
	GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import CalculatorPriceType from './CalculatorPriceType';

const CalculatorPriceListType = new ObjectType({
	name: 'CalculatorPriceList',
	fields: {
		lists: {
			type: new ListType(CalculatorPriceType),
      resolve: obj => obj
		}
	}
});

export default CalculatorPriceListType;

