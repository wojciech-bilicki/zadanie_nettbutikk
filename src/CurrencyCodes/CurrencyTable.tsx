import { Paper, Table, TableBody, TableCell, TableHead, Typography } from '@material-ui/core'
import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';

import onLoad from 'src/components/onLoad';
import { StoreDispatch, StoreState } from 'src/config/store';
import { CurrencyCodesState } from 'src/CurrencyCodes/currencyCodes.model';
import CurrencyRow from 'src/CurrencyCodes/CurrencyRow'

interface DispatchProps {
  loadCurrencyCodes: () => void;
  addToFavourites: (code: string) => void;
}

type StateProps = CurrencyCodesState;

type Props = DispatchProps & StateProps;

const TableStyled = styled(Table)`
  table-layout: fixed;
`;

const TableTitle = styled(Typography)`
  padding: 16px 0;
`

const CurrencyTable: SFC<Props> = ({ codes, addToFavourites }: Props) => (
  <>
    <Paper>
      <TableTitle variant="title">Currencies of the world</TableTitle>
      <TableStyled>
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
          {codes && codes.map(code => <CurrencyRow onAddCode={addToFavourites} code={code} key={code.code} />)}
        </TableBody>
      </TableStyled>
    </Paper>
  </>
)

const mapDispatch = (dispatch: StoreDispatch) => ({
  loadCurrencyCodes: dispatch.currencyCodes.loadCountryCodes,
  addToFavourites: (code: string) => console.log(code)
})

const mapState = (state: StoreState) => ({
  codes: state.currencyCodes.codes
})


export default compose(
  connect<StateProps, DispatchProps>(mapState, mapDispatch),
  onLoad((props: DispatchProps) => props.loadCurrencyCodes())
)(CurrencyTable);


