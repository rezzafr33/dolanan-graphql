import {
	GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import CalculatorTypeType from './CalculatorTypeType';

const CalculatorTypeListType = new ObjectType({
	name: 'CalculatorTypeList',
	fields: {
		lists: {
			type: new ListType(CalculatorTypeType),
      resolve: obj => obj
		}
	}
});

export default CalculatorTypeListType;

