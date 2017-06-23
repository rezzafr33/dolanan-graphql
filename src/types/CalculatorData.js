import {
  GraphQLObjectType as ObjectType,
} from 'graphql';

import CalculatorTypeListType from './CalculatorTypeListType';
import CalculatorCoverListType from './CalculatorCoverListType';
import CalculatorPriceListType from './CalculatorPriceListType';

const CalculatorData = new ObjectType({
  name: 'CalculatorData',
  fields: {
    types: { type: CalculatorTypeListType, resolve: obj => obj.type },
    covers: { type: CalculatorCoverListType, resolve: obj => obj.cover },
    prices: { type: CalculatorPriceListType, resolve: obj => obj.data }
  }
});

export default CalculatorData;

