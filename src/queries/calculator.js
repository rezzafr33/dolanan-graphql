import 'isomorphic-fetch';

import {
  apiUrl
} from '../../config';

import {
  handleFetchError,
  handleSuccessFalse,
} from '../utils';

import CalculatorData from '../types/CalculatorData';

const calculator = {
  type: CalculatorData,
  resolve: () => {
    const data = fetch(`${apiUrl}/data/calculator`)
      .then(handleFetchError)
      .then(res => res.json())
      .then(handleSuccessFalse)
      .catch(reason => { console.log(reason) });
    return data;
  }
}

export default calculator;
