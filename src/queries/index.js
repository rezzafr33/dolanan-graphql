import {
  GraphQLObjectType as ObjectType,
} from 'graphql';

import calculator from './calculator';
import hello from './hello';

const query = new ObjectType({
  name: 'Query',
  fields: {
    hello,
    calculator
  }
});

export default query;

