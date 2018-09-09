import React from 'react';
import { render } from 'react-testing-library';

import AddButton from 'src/CurrencyCodes/AddButton';
const buttonLabel = "Add to favourites";

test('calls onClick when ActionButton is pressed and display loader', () => {
  const onClickFn = jest.fn();
  const { getByText, queryByTestId, rerender } = render(<AddButton isDisabled={false} onClick={onClickFn}>{buttonLabel}</AddButton>);
  getByText(buttonLabel).click();
  expect(onClickFn).toHaveBeenCalled();

})

test('should hide loader when loading is finished', () => {
  const onClickFn = jest.fn();

  const { getByText, queryByTestId, rerender } = render(<AddButton isDisabled={false} onClick={onClickFn}>{buttonLabel}</AddButton>);
  getByText(buttonLabel).click();

  expect(queryByTestId('loader')).not.toBeNull();
  rerender(<AddButton isDisabled={true} onClick={onClickFn}>{buttonLabel}</AddButton>);
  expect(queryByTestId('loader')).toBeNull();

})