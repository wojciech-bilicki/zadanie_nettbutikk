import { Paper, TableBody, TableCell, TableHead, Typography } from '@material-ui/core'
import React, { SFC } from 'react';
import { connect } from 'react-redux';

import NoFavourites from 'src/assets/no_favourites.png';
import { StyledTable, TableTitle } from 'src/components/TableComponents';
import { StoreDispatch, StoreState } from 'src/config/store';
import FavouriteRow from 'src/Favourites/FavouriteRow';
import { CurrencyRating } from 'src/Favourites/favourites.api';

interface StateProps {
  favourites: CurrencyRating[] | null;
};
interface DispatchProps {
  removeFavourite: (code: string) => void;
}


type Props = StateProps & DispatchProps;

const FavouriteTable: SFC<Props> = ({ favourites, removeFavourite }: Props) => {
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
          {favourites && favourites.map(favourite => <FavouriteRow onRemove={() => removeFavourite(favourite.code)} key={favourite.code} favourite={favourite} />)}
        </TableBody>
      </StyledTable>
    </Paper>
  )
}

const mapDispatch = (dispatch: StoreDispatch) => ({
  removeFavourite: dispatch.favouritesModel.removeRatingForCode
})

const mapState = (state: StoreState) => ({
  favourites: state.favouritesModel.favourites
})



export default connect<StateProps, DispatchProps>(mapState, mapDispatch)(FavouriteTable);