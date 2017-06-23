import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';


const MessageType = new ObjectType({
  name: 'Message',
  fields: {
    message: { type: StringType }
  }
});

export default MessageType;

