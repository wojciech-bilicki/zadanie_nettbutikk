import { createModel } from '@rematch/core';

import { CurrencyEntry, getCurrencyCodes } from 'src/CurrencyCodes/currencyCodes.api';

export interface CurrencyCodesState {
  codes: CurrencyEntry[] | null;
}

const currencyCodes = createModel({
  state: {
    codes: null
  },
  reducers: {
    currencyCodesLoaded(state: CurrencyCodesState, payload: CurrencyEntry[]) {
      return { ...state, codes: payload }
    }
  },
  effects: {
    async loadCountryCodes() {
      const codes = await getCurrencyCodes();
      this.currencyCodesLoaded(codes);
    }
  }
})

export default currencyCodes;