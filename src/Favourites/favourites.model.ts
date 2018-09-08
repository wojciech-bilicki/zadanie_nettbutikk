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
    currencyRatingLoaded(state, payload: CurrencyRating) {
      if (state.favourites === null) {
        return { favourites: [payload] }
      } else {
        return { favourites: state.favourites.concat(payload) }
      }
    },
    ratingsLoaded(state, favourites: CurrencyRating[]) {
      if (state.favourites === null) {
        return { favourites }
      } else {
        return { favourites: state.favourites.concat(favourites) }
      }
    }
  },
  effects: {
    async addToFavourites(code: string) {
      const ratingEntry = await getCurrencyRating(code);
      if (ratingEntry) {
        stashCode(code);
        this.currencyRatingLoaded(ratingEntry);
      }
    },
    async loadRatingsForCodes(codes: string[]) {
      const ratingEntires = await Promise.all(codes.map(getCurrencyRating));
      this.ratingsLoaded(ratingEntires);
    }
  },
  selectors: {
    getFavouriteCodes(state: FavouritesState) {
      return state.favourites && state.favourites.map(fav => fav.code);
    }
  }
})

export const CODES_KEY = 'codes';

const stashCode = (code: string) => {

  const codes = localStorage.getItem(CODES_KEY);
  if (codes) {
    const codesArray = JSON.parse(codes) as string[];
    if (!codesArray.includes(code)) {
      codesArray.push(code);
      localStorage.setItem(CODES_KEY, JSON.stringify(codesArray));
    }
  } else {
    localStorage.setItem(CODES_KEY, JSON.stringify([code]));
  }
}

export default favouritesModel;