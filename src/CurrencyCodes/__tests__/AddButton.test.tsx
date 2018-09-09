import React from 'react';
import { render } from 'react-testing-library';

import AddButton from 'src/CurrencyCodes/AddButton';

test('calls onClick when ActionButton is pressed and display loader', () => {
  const onClickFn = jest.fn();
  const buttonLabel = "Add to favourites";
  const { getByText, queryByTestId, rerender } = render(<AddButton onClick={onClickFn}>{buttonLabel}</AddButton>);

  getByText(buttonLabel).click();

  const loader = queryByTestId("loader");

  expect(onClickFn).toHaveBeenCalled();

})

test('should hide loader when loading is finished', () => {
  const onClickFn = jest.fn();
  const buttonLabel = "Add to favourites";
  const { queryByTestId } = render(<AddButton isLoading={false} onClick={onClickFn}>{buttonLabel}</AddButton>);

  expect(queryByTestId('loader')).toBeNull();

})