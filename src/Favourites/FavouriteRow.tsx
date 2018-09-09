import { Button, TableRow } from '@material-ui/core'
import React, { SFC } from 'react';
import styled from 'styled-components';

import { StyledTableCell } from 'src/components/TableComponents';
import { CurrencyRating } from 'src/Favourites/favourites.api';

const DeleteButton = styled(Button)`
  && {
    color: red;
  }
`;


interface Props {
  favourite: CurrencyRating;
  onRemove: () => void;
}

const FavouriteRow: SFC<Props> = ({ favourite: { code, rates }, onRemove }: Props) => (
  <TableRow>
    <StyledTableCell>{code}</StyledTableCell>
    <StyledTableCell>{
      rates.map(rate => <div key={rate.no}>
        {rate.no && <p>no: {rate.no}</p>}
        {rate.mid && <p>mid: {rate.mid}</p>}
        {rate.bid && <p>bid: {rate.bid}</p>}
        {rate.ask && <p>ask: {rate.ask}</p>}
      </div>)}</StyledTableCell>
    <StyledTableCell>
      <DeleteButton onClick={onRemove}>Delete</DeleteButton>
    </StyledTableCell>
  </TableRow>
)

export default FavouriteRow;;