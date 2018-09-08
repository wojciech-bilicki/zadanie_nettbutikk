
import { CssBaseline, Grid } from '@material-ui/core';
import * as React from 'react';

import { CurrencyTable } from 'src/CurrencyCodes'
import Header from 'src/Header';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />

        <Grid container={true}>
          <Grid item={true} xs={6} >Your currencies</Grid>
          <Grid item={true} xs={6} >
            <CurrencyTable />
          </Grid>
        </Grid>
        <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by Freepik</a>
      </div>
    );
  }
}

export default App;
