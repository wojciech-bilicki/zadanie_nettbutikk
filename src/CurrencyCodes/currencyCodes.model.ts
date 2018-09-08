import { createModel } from '@rematch/core';

import { CurrencyEntry, getCurrencyCodes } from 'src/CurrencyCodes/currencyCodes.api';

interface CurrenyCodesState {
  currencyCodes: CurrencyEntry[] | null;
}

const currencyCodes = createModel<CurrenyCodesState>({
  state: null,
  reducers: {
    currencyCodesLoaded(state: CurrenyCodesState, payload: CurrencyEntry[]) {
      return { ...state, currencyCodes: payload }
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