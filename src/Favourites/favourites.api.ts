import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.nbp.pl/api/exchangerates/rates/',
  headers: {
    "Accept": "application/json"
  }
})

const API_TABLE_NAMES = ['A', 'B', 'C']

const getCurrencyRating = async (code: string): Promise<CurrencyRating | null> => {
  let ratings = null;
  const urls = API_TABLE_NAMES.map(tableName => `${tableName}/${code.toLowerCase()}`);
  try {
    ratings = await Promise.all(urls.map(url => currencyRatingRequest(url)));
  } catch (e) {
    console.log(e);
  }

  if (ratings) {
    const nonEmptyRatings = ratings.filter<CurrencyRating>((entry: CurrencyRating | null): entry is CurrencyRating => entry !== null)
    if (nonEmptyRatings.length === 0) {
      return null
    }
    return nonEmptyRatings.reduce<CurrencyRating>((acc, entry) => {
      if (acc.hasOwnProperty('rates')) {
        acc.rates = acc.rates.concat(entry.rates);
        return acc;
      }

      return entry;

    }, {} as CurrencyRating);
  }
  return null
}

export { getCurrencyRating };

export interface CurrencyRating {
  code: string;
  currency: string;
  rates: Array<{
    no: string;
    effectiveDate: string;
    mid?: number;
    bid?: number;
    ask?: number;

  }>
}

const currencyRatingRequest = async (url: string): Promise<CurrencyRating | null> => {
  try {
    const { data } = await api.get<CurrencyRating>(url);
    return data;
  } catch (e) {
    return null;
  }
}