import { dispatch } from 'src/config/store';
import { CODES_KEY } from 'src/Favourites/favourites.model';

async function preloadCurrencies() {
  const stashedCurrenciesCodes = localStorage.getItem(CODES_KEY);
  if (stashedCurrenciesCodes) {
    const codes = JSON.parse(stashedCurrenciesCodes);
    await dispatch.favouritesModel.loadRatingsForCodes(codes);
  }
}

export default preloadCurrencies;