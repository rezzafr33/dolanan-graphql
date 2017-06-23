import 'isomorphic-fetch';

import {
  handleFetchError,
  handleSuccessFalse,
} from '../utils';

import CalculatorData from '../types/CalculatorData';

const calculator = {
  type: CalculatorData,
  resolve: () => {
    const data = fetch('http://localhost:8000/data/calculator')
      .then(handleFetchError)
      .then(res => res.json())
      .then(handleSuccessFalse)
      .catch(reason => { console.log(reason) });
    return data;
  }
}

export default calculator;
