import { createModel } from '@rematch/core';
import { CurrencyRating, getCurrencyRating } from 'src/Favourites/favourites.api'

export interface FavouritesState {
  favourites: CurrencyRating[] | null;
}

const initialState: FavouritesState = {
  favourites: null
}

const favouritesModel = createModel({
  state: initialState,
  reducers: {
    currencyRatingLoaded(state, payload) {
      console.log(state.favourites === null)
      if (state.favourites === null) {
        return { favourites: [payload] }
      } else {
        return { favourites: state.favourites.concat(payload) }
      }
    }
  },
  effects: {
    async addToFavourites(code: string) {
      stashCode(code);
      const ratingEntry = await getCurrencyRating(code);
      this.currencyRatingLoaded(ratingEntry)
    }
  }
})

const CODES_KEY = 'codes';

const stashCode = (code: string) => {

  const codes = localStorage.getItem(CODES_KEY);
  if (codes) {
    const codesArray = JSON.parse(codes) as string[];
    codesArray.push(code);
    localStorage.setItem(CODES_KEY, JSON.stringify(codesArray));
  } else {
    localStorage.setItem(CODES_KEY, JSON.stringify([code]));
  }
}

export default favouritesModel;