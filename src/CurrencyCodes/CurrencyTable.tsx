import { Paper, TableBody, TableCell, TableHead, Typography } from '@material-ui/core'
import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import onLoad from 'src/components/onLoad';
import { StyledTable, TableTitle } from 'src/components/TableComponents';
import { select, StoreDispatch, StoreState } from 'src/config/store';
import { CurrencyCodesState } from 'src/CurrencyCodes/currencyCodes.model';
import CurrencyRow from 'src/CurrencyCodes/CurrencyRow'

interface DispatchProps {
  loadCurrencyCodes: () => void;
  addToFavourites: (code: string) => void;
}

type StateProps = CurrencyCodesState & {
  favouriteCodes: string[] | null;
};

type Props = DispatchProps & StateProps;


const CurrencyTable: SFC<Props> = ({ codes, addToFavourites, favouriteCodes }: Props) => (
  <>
    <Paper>
      <TableTitle variant="title">Currencies of the world</TableTitle>
      <StyledTable>
        <TableHead>
          <TableCell>
            Currency name
        </TableCell>
          <TableCell>
            Curreny code
        </TableCell>
          <TableCell>
            Currency symbol
        </TableCell>
          <TableCell>
            Countries
        </TableCell>
          <TableCell>
            Actions
        </TableCell>
        </TableHead>
        <TableBody>
          {codes && codes.map(code =>
            <CurrencyRow
              isAddingDisabled={favouriteCodes ? favouriteCodes.includes(code.code) : false}
              onAddCode={addToFavourites} code={code} key={code.code}
            />)}
        </TableBody>
      </StyledTable>
    </Paper>
  </>
)

const mapDispatch = (dispatch: StoreDispatch) => ({
  loadCurrencyCodes: dispatch.currencyCodes.loadCountryCodes,
  addToFavourites: dispatch.favouritesModel.addToFavourites,
})

const mapState = (state: StoreState) => ({
  codes: state.currencyCodes.codes,
  favouriteCodes: select.favouritesModel.getFavouriteCodes(state)
})


export default compose(
  connect<StateProps, DispatchProps>(mapState, mapDispatch),
  onLoad((props: DispatchProps) => props.loadCurrencyCodes())
)(CurrencyTable);


