

import { init } from '@rematch/core';

import { getCurrencyCodes } from 'src/CurrencyCodes/currencyCodes.api'
import currencyCodes from 'src/CurrencyCodes/currencyCodes.model';

import { parsedCountries as codesMock } from '../__mocks__/currencyCodes.mock';

jest.mock('src/CurrencyCodes/currencyCodes.api', () => {
  const codes = require('../__mocks__/currencyCodes.mock').parsedCountries;
  return {
    getCurrencyCodes: jest.fn().mockResolvedValue(codes);
  }
})

describe('model: currencyCodes', () => {
  it('dispatcher: check state change', () => {
    const store = init({
      models: { currencyCodes }
    })

    const newCurrencyCodes = codesMock;
    const state = store.getState().currencyCodes;
    store.dispatch.currencyCodes.currencyCodesLoaded(newCurrencyCodes);
    const nextState = store.getState().currencyCodes;

    expect(state.codes).toBeNull();
    expect(nextState.codes).toEqual(newCurrencyCodes);
  })


  it('reducer: currencyCodesLoaded should store payload in the state', () => {
    const newCurrencyCodes = codesMock;
    const result = currencyCodes.reducers.currencyCodesLoaded(null as any, newCurrencyCodes);
    expect(result).toEqual({ codes: newCurrencyCodes });
  })

  it('effect: loadCountryCodes should call getCurrencyCodes and dispatch currencyCodesLoaded', async () => {
    const reducerMockFn = jest.fn();
    const modelReducersMock = { currencyCodesLoaded: reducerMockFn };


    await currencyCodes.effects.loadCountryCodes.call(modelReducersMock);
    expect(getCurrencyCodes).toHaveBeenCalled();
    expect(reducerMockFn).toHaveBeenCalledWith(codesMock);
  })

})