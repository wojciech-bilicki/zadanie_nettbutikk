import { createModel } from '@rematch/core';
import { CurrencyRating, getCurrencyRating } from 'src/Favourites/favourites.api'

interface FavouritesModel {
  favourites: CurrencyRating[] | null;
}

const favourites = createModel<null>({
  state: null,
  reducers: {
    currencyRatingLoaded(state, payload) {
      return { ...state, payload }
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

export default favourites;