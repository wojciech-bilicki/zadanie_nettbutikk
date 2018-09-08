import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { currencyCodes } from 'src/CurrencyCodes';
import { favourites } from 'src/Favourites';


const models = {
  currencyCodes,
  favourites
}

type modelsType = typeof models;

export const store = init({
  models
})

export type StoreDispatch = RematchDispatch<modelsType>;
export type StoreState = RematchRootState<modelsType>;

export const { getState, dispatch } = store;