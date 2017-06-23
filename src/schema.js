import {
  GraphQLSchema as Schema,
} from 'graphql';

import query from './queries';

const schema = new Schema({ query });

export default schema;
