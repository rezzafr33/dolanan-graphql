import {
  GraphQLNonNull as NonNullType,
  GraphQLString as StringType,
} from 'graphql';

import MessageType from '../types/MessageType';

const hello = {
  type: MessageType,
  args: {
    name: { type: new NonNullType(StringType) }
  },
  resolve: (_, {name}) => ({ message: `Hello World ${name}` })
};

export default hello;

