import * as R from 'ramda';

const countries = [{

  "currencies": [
    {
      "code": "AFN",
      "name": "Afghan afghani",
      "symbol": "؋"
    }
  ],
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan"
},
{
  "currencies": [
    {
      "code": "EUR",
      "name": "Euro",
      "symbol": "€"
    }
  ],
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands"
},
{
  "currencies": [
    {
      "code": "ALL",
      "name": "Albanian lek",
      "symbol": "L"
    }
  ],
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania"
},
{
  "currencies": [
    {
      "code": "EUR",
      "name": "Euro",
      "symbol": "€"
    }
  ],
  "flag": "https://restcountries.eu/data/prt.svg",
  "name": "Portugal"
}
]

const responseCountries = [{
  code: "ALL",
  name: "Albanian lek",
  symbol: "L",
  countries: [{
    name: "Albania",
    flag: "https://restcountries.eu/data/alb.svg",
  }]
}, {
  "code": "EUR",
  "name": "Euro",
  "symbol": "€",
  countries: [{
    "flag": "https://restcountries.eu/data/ala.svg",
    "name": "Åland Islands"
  }, {
    "flag": "https://restcountries.eu/data/prt.svg",
    "name": "Portugal"
  }]
},
{
  "code": "AFN",
  "name": "Afghan afghani",
  "symbol": "؋",
  countries: [
    {
      "flag": "https://restcountries.eu/data/afg.svg",
      "name": "Afghanistan"
    }
  ]
}
]

const parsedCountries = R.sortWith([R.ascend(R.prop('code'))], responseCountries)

export {
  parsedCountries,
  countries
}