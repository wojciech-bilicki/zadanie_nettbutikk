import { ExtractRematchSelectorsFromModels, init, RematchDispatch, RematchRootState } from '@rematch/core';
import selectPlugin, { getSelect } from '@rematch/select';
import { currencyCodes } from 'src/CurrencyCodes';
import { favourites as favouritesModel } from 'src/Favourites';
import unavailables from 'src/Unavailables/unavailables.model';

const models = {
  currencyCodes,
  favouritesModel,
  unavailables
}

type modelsType = typeof models;
const selectors = selectPlugin();
export const store = init({
  models,
  plugins: [selectors],
})

export const select = getSelect() as ExtractRematchSelectorsFromModels<
  modelsType
  >;
export type StoreDispatch = RematchDispatch<modelsType>;
export type StoreState = RematchRootState<modelsType>;

export const { getState, dispatch } = store;