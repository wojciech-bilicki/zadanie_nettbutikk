import { Button, TableCell, TableRow, Tooltip } from '@material-ui/core';
import React, { SFC } from 'react';
import styled from 'styled-components';


import { CurrencyEntry } from 'src/CurrencyCodes/currencyCodes.api';

interface Props {
  code: CurrencyEntry,
  onAddCode: (code: string) => void;
}

const CountryFlag = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 8px;
`;

const CurrencyTableCell = styled(TableCell)`
  && {
    padding: 8px;
  }
`;

const AddButton = styled(Button)`
  && {
    color: #12838b;
  }
`;

const CurrencyRow: SFC<Props> = ({ code, onAddCode }: Props) => (
  <TableRow>
    <CurrencyTableCell>
      {code.name}
    </CurrencyTableCell>
    <CurrencyTableCell>
      {code.code}
    </CurrencyTableCell>
    <CurrencyTableCell>
      {code.symbol}
    </CurrencyTableCell>
    <CurrencyTableCell>
      {code.countries.map(country => <Tooltip title={country.name} key={country.name}><CountryFlag src={country.flag} /></Tooltip>)}
    </CurrencyTableCell>
    <CurrencyTableCell>
      <AddButton onClick={() => onAddCode(code.code)}>Add to favourites</AddButton>
    </CurrencyTableCell>
  </TableRow>
);

export default CurrencyRow;