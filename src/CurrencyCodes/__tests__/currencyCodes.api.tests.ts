import { countries, parsedCountries } from '../__mocks__/currencyCodes.mock';
import { transformCountryDataToCurrencyCodes } from '../currencyCodes.api';


test('should correctly transform countryData to currency codes', () => {
  const transformedCountries = transformCountryDataToCurrencyCodes(countries);
  expect(transformedCountries).toEqual(parsedCountries);
})