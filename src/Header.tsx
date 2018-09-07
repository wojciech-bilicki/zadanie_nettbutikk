import { AppBar, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';

const Header: React.SFC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title">
        Currency Tracker
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header;
