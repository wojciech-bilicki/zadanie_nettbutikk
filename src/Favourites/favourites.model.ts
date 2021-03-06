import { createModel } from '@rematch/core';
import * as R from 'ramda';
import { toast } from "react-toastify";

import { dispatch } from 'src/config/store';
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
      if (R.isNil(state.favourites)) {
        return { favourites: [payload] }
      } else {
        return { favourites: state.favourites.concat(payload) }
      }
    },
    ratingsLoaded(state, favourites: CurrencyRating[]) {
      if (R.isNil(state.favourites)) {
        return { favourites }
      } else {
        return { favourites: state.favourites.concat(favourites) }
      }
    },
    removeFromFavourites(state: FavouritesState, code: string) {
      const favourites = state.favourites && state.favourites.filter(fav => fav.code !== code);
      if (!favourites || favourites.length === 0) {
        return initialState;
      }

      return state.favourites && { favourites };
    }
  },
  effects: {
    async addToFavourites(code: string) {
      const ratingEntry = await getCurrencyRating(code);
      if (ratingEntry) {
        stashCode(code);
        this.currencyRatingLoaded(ratingEntry);
        toast.success(`${code} added to favourites`);
      } else {
        dispatch.unavailables.onCodeUnavailable(code);
        toast.error(`We couldn't find ratings for code ${code} ;(. Try different currency`)
      }
    },
    async loadRatingsForCodes(codes: string[]) {
      const ratingEntires = await Promise.all(codes.map(getCurrencyRating));
      this.ratingsLoaded(ratingEntires);
    },
    async removeRatingForCode(code: string) {
      this.removeFromFavourites(code);
      removeFromStash(code);
    },
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
  ;

const removeFromStash = (code: string) => {
  const codes = localStorage.getItem(CODES_KEY);
  if (codes) {
    const codesArray = JSON.parse(codes) as string[];
    const updatedCodesArray = R.reject(R.equals(code), codesArray);
    localStorage.setItem(CODES_KEY, JSON.stringify(updatedCodesArray));
  }
}

export default favouritesModel;