import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';


const MediaType = new ObjectType({
  name: 'Media',
  fields: {
    caption: { type: StringType },
    url: { type: StringType },
    thumbnail: { type: StringType }
  }
});

export default MediaType;
