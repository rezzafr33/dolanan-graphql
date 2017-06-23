import {
	GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import CalculatorCoverType from './CalculatorCoverType';

const CalculatorCoverListType = new ObjectType({
	name: 'CalculatorCoverList',
	fields: {
		lists: {
			type: new ListType(CalculatorCoverType),
      resolve: obj => obj
		}
	}
});

export default CalculatorCoverListType;

