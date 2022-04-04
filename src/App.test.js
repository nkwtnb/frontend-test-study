import { cleanup, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

afterEach(cleanup);
describe("App Component", () => {
  test("test add", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("add"))
    expect(screen.getByTestId("counter").innerHTML).toBe("1");
  });
  test("test minus", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("minus"))
    expect(screen.getByTestId("counter").innerHTML).toBe("-1");
  });
  test("test async api", async () => {
    const app = render(<App />);
    // イベントによるstateの更新はactを使用する
    await act(async () => {
      await fireEvent.click(screen.getByTestId("get-api"))
    })
    await waitFor(() => {
      // 100件取得、要素が描画されていること
      expect(app.getByText("100")).toBeInTheDocument()
    }, {
      timeout: 5000
    })
  });
});

describe("snapshot test block", () => {
  test('snapshot test', () => {
    const { asFragment } = render(<App />);
    // snapshotと比較、意図した変更の場合、uオプションでスナップショットを更新
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
