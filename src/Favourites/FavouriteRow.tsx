import { Button } from '@material-ui/core'
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
}

const FavouriteRow: SFC<Props> = ({ favourite: { code, rates } }: Props) => (
  <>
    <StyledTableCell>{code}</StyledTableCell>
    <StyledTableCell>{
      rates.map(rate => <div key={rate.no}>
        <p>no: {rate.no}</p>
        <p>mid: {rate.mid}</p>
        <p>bid: {rate.bid}</p>
        <p>ask: {rate.ask}</p>
      </div>)}</StyledTableCell>
    <StyledTableCell>
      <DeleteButton>Delete</DeleteButton>
    </StyledTableCell>
  </>
)

export default FavouriteRow;;