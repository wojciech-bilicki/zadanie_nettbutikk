import { createModel } from '@rematch/core';

import { getCurrencyCodes } from 'src/CurrencyCodes/currencyCodes.api';

const currencyCodes = createModel({
  state: null,
  effects: {
    async loadCountryCodes() {
      console.log('Load country codes');
      await getCurrencyCodes();
    }
  }
})

export default currencyCodes;