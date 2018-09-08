import { Paper, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
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

interface CodesState {
  favouriteCodes: string[] | null;
  unavailables: string[] | null;
};


type StateProps = CurrencyCodesState & CodesState;
type Props = DispatchProps & StateProps;

const isAddingDisabled = ({ favouriteCodes, unavailables, code }: CodesState & { code: string }) => {
  if (favouriteCodes && favouriteCodes.includes(code)) {
    return true;
  } else if (unavailables && unavailables.includes(code)) {
    return true;
  }
  return false;
}

const CurrencyTable: SFC<Props> = ({ codes, addToFavourites, favouriteCodes, unavailables }: Props) => (
  <Paper>
    <TableTitle variant="title">Currencies of the world</TableTitle>
    {codes ? (
      <StyledTable>
        <TableHead>
          <TableRow>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {codes.map(code =>
            <CurrencyRow
              key={code.name}
              isAddingDisabled={isAddingDisabled({ favouriteCodes, unavailables, code: code.code })}
              onAddCode={addToFavourites} code={code}
            />)}
        </TableBody>
      </StyledTable>) : <Typography variant="title">Loading</Typography>}
  </Paper>
)

const mapDispatch = (dispatch: StoreDispatch) => ({
  loadCurrencyCodes: dispatch.currencyCodes.loadCountryCodes,
  addToFavourites: dispatch.favouritesModel.addToFavourites,
})

const mapState = (state: StoreState) => ({
  codes: state.currencyCodes.codes,
  favouriteCodes: select.favouritesModel.getFavouriteCodes(state),
  unavailables: select.unavailables.getUnavailables(state),
})


export default compose(
  connect<StateProps, DispatchProps>(mapState, mapDispatch),
  onLoad((props: DispatchProps) => props.loadCurrencyCodes())
)(CurrencyTable);


