import {
	GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import CalculatorAccessoryType from './CalculatorAccessoryType';

const CalculatorAccessoryListType = new ObjectType({
	name: 'CalculatorAccessoryList',
	fields: {
		lists: {
			type: new ListType(CalculatorAccessoryType),
      resolve: obj => obj
		}
	}
});

export default CalculatorAccessoryListType;

