import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import onLoad from 'src/components/onLoad';
import { StoreDispatch } from 'src/config/store';

interface DispatchProps {
  loadCurrencyCodes: () => void;
}

type Props = DispatchProps;

const CurrencyTable: SFC<Props> = () => (
  <div>
    Table
  </div>
)

const mapDispatch = (dispatch: StoreDispatch) => ({
  loadCurrencyCodes: dispatch.currencyCodes.loadCountryCodes
})


export default compose(
  connect<null, DispatchProps>(null, mapDispatch),
  onLoad((props: DispatchProps) => props.loadCurrencyCodes())
)(CurrencyTable);


