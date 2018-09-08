
import { CssBaseline, Grid } from '@material-ui/core';
import * as React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';

import { CurrencyTable } from 'src/CurrencyCodes';
import { FavouriteTable } from 'src/Favourites';

import Header from 'src/Header';
import './App.css';

const TablesGrid = styled(Grid)`
  && { 
    margin-top: 32px;
    padding: 0 16px;
    };
`;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />

        <TablesGrid container={true} spacing={16}>
          <Grid item={true} xs={4} >
            <FavouriteTable />
          </Grid>
          <Grid item={true} xs={8} >
            <CurrencyTable />
          </Grid>
        </TablesGrid>
        <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by Freepik</a>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
