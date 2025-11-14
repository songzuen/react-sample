import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the couter starts at 0', () => {
  render(<App />);
  const couterElement = screen.getByTestId("counter");
  expect(couterElement).toHaveTextContent(0);
});

test('minus button has correct text ', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test('plus button has correct text ', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test('When the + button is pressed, the counter changes to 1', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const couterElement = screen.getByTestId("counter");
  expect(couterElement).toHaveTextContent(1);
});

test('on/off button as blue color', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor:'blue'})
})

test('Prevent the -, + button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButton = screen.getByTestId("plus-button");
  expect(plusButton).toBeDisabled();
})
