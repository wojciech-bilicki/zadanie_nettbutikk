import axios from 'axios';

interface CurrencyResponse {
  data: CurrencyEntry[]
}

interface CurrencyEntry {
  flag: string;
  currencies: Currency[];
}

interface Currency {
  code: string,
  name: string,
  symbol: string;
}

export const getCurrencyCodes = async () => {
  const url = 'https://restcountries.eu/rest/v2/all?fields=name;flag;currencies';
  const { data } = await axios.get<CurrencyResponse>(url);
  console.log(data);
}