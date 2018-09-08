import { Paper, Table, TableBody, TableCell, TableHead } from '@material-ui/core'
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
}

type StateProps = CurrencyCodesState;

type Props = DispatchProps & StateProps;

const TableStyled = styled(Table)`
  table-layout: fixed;
`;

const CurrencyTable: SFC<Props> = ({ codes }: Props) => (
  <>
    <Paper>
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
          {codes && codes.map(code => <CurrencyRow code={code} key={code.code} />)}
        </TableBody>
      </TableStyled>
    </Paper>
  </>
)

const mapDispatch = (dispatch: StoreDispatch) => ({
  loadCurrencyCodes: dispatch.currencyCodes.loadCountryCodes
})

const mapState = (state: StoreState) => ({
  codes: state.currencyCodes.codes
})


export default compose(
  connect<StateProps, DispatchProps>(mapState, mapDispatch),
  onLoad((props: DispatchProps) => props.loadCurrencyCodes())
)(CurrencyTable);


