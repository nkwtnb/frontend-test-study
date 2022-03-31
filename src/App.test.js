import { render, screen } from '@testing-library/react';
import App from './App';

describe("test block", () => {
  test("test counter", () => {
    render(<App />);
    screen.getByTestId("add").click()
    expect(screen.getByTestId("counter").innerHTML).toBe("1");
    screen.getByTestId("minus").click()
    expect(screen.getByTestId("counter").innerHTML).toBe("0");
  });
});

describe("snapshot test block", () => {
  test('snapshot test', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
