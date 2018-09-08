import { Paper, TableBody, TableCell, TableHead, Typography } from '@material-ui/core'
import React, { SFC } from 'react';
import { connect } from 'react-redux';

import NoFavourites from 'src/assets/no_favourites.png';
import { StyledTable, TableTitle } from 'src/components/TableComponents';
import { StoreState } from 'src/config/store';
import FavouriteRow from 'src/Favourites/FavouriteRow';
import { CurrencyRating } from 'src/Favourites/favourites.api';

interface StateProps {
  favourites: CurrencyRating[] | null;
};


type Props = StateProps;

const FavouriteTable: SFC<Props> = ({ favourites }: Props) => {
  if (!favourites) {
    return (
      <Paper>
        <img src={NoFavourites} />
        <Typography variant="subheading">You have no favourite currencies</Typography>

      </Paper>
    )
  }

  return (
    <Paper>
      <TableTitle variant="title">Your favourite currencies</TableTitle>
      <StyledTable>
        <TableHead>
          <TableCell>
            Currency name
      </TableCell>
          <TableCell>
            Ratings
      </TableCell>
          <TableCell>
            Actions
      </TableCell>
        </TableHead>
        <TableBody>
          {favourites && favourites.map(favourite => <FavouriteRow key={favourite.code} favourite={favourite} />)}
        </TableBody>
      </StyledTable>
    </Paper>
  )
}

const mapState = (state: StoreState) => ({
  favourites: state.favouritesModel.favourites
})



export default connect<StateProps, null>(mapState, null)(FavouriteTable);