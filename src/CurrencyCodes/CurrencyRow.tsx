import { Button, TableCell, TableRow, Tooltip } from '@material-ui/core';
import React, { SFC } from 'react';
import styled from 'styled-components';


import { CurrencyEntry } from 'src/CurrencyCodes/currencyCodes.api';

interface Props {
  code: CurrencyEntry
}

const CountryFlag = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 8px;
`;

const CurrencyRow: SFC<Props> = ({ code }: Props) => (
  <TableRow>
    <TableCell>
      {code.name}
    </TableCell>
    <TableCell>
      {code.code}
    </TableCell>
    <TableCell>
      {code.symbol}
    </TableCell>
    <TableCell>
      {code.countries.map(country => <Tooltip title={country.name} key={country.name}><CountryFlag src={country.flag} /></Tooltip>)}
    </TableCell>
    <TableCell>
      <Button>Add to favourites</Button>
    </TableCell>
  </TableRow>
);

export default CurrencyRow;