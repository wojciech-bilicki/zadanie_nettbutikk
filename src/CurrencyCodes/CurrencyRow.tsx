import { TableRow, Tooltip } from '@material-ui/core';
import React, { SFC } from 'react';
import styled from 'styled-components';

import { StyledTableCell } from 'src/components/TableComponents';
import AddButton from 'src/CurrencyCodes/AddButton';
import { CurrencyEntry } from 'src/CurrencyCodes/currencyCodes.api';

interface Props {
  code: CurrencyEntry,
  onAddCode: (code: string) => void;
  isAddingDisabled: boolean;
}

const CountryFlag = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 8px;
`;

const CurrencyRow: SFC<Props> = ({ code, onAddCode, isAddingDisabled }: Props) => (
  <TableRow>
    <StyledTableCell>
      {code.name}
    </StyledTableCell>
    <StyledTableCell>
      {code.code}
    </StyledTableCell>
    <StyledTableCell>
      {code.symbol}
    </StyledTableCell>
    <StyledTableCell>
      {code.countries.map(country => <Tooltip title={country.name} key={country.name}><CountryFlag src={country.flag} /></Tooltip>)}
    </StyledTableCell>
    <StyledTableCell>
      <AddButton isDisabled={isAddingDisabled} onClick={() => onAddCode(code.code)}>Add to favourites</AddButton>
    </StyledTableCell>
  </TableRow>
);

export default CurrencyRow;