import { Paper, Typography } from '@material-ui/core'
import React from 'react';
import NoFavourites from 'src/assets/no_favourites.png';

const FavouriteTable = () => {
  return (
    <Paper>
      <img src={NoFavourites} />
      <Typography variant="subheading">You have no favourite currencies</Typography>
    </Paper>
  )
}

export default FavouriteTable;