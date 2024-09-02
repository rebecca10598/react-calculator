/* 
  import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator buttons', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('C')).toBeInTheDocument();
  expect(getByText('=')).toBeInTheDocument();
});

test('performs addition', () => {
  const { getByText, getByRole } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('='));
  expect(getByRole('heading')).toHaveTextContent('2');
});
*/

import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator buttons', () => {
  const { getByText } = render(<Calculator />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText('1')).toBeInTheDocument();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText('C')).toBeInTheDocument();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText('=')).toBeInTheDocument();
});

test('performs addition', () => {
  const { getByText, getByRole } = render(<Calculator />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText('1'));
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText('+'));
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText('1'));
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText('='));
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByRole('heading')).toHaveTextContent('2');
});
