import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

describe("App Component", () => {
  test("test add", () => {
    render(<App />);
    screen.getByTestId("add").click()
    expect(screen.getByTestId("counter").innerHTML).toBe("1");
  });
  test("test add", () => {
    render(<App />);
    screen.getByTestId("minus").click()
    expect(screen.getByTestId("counter").innerHTML).toBe("-1");
  });
  test("test async api", async () => {
    render(<App />);
    // イベントによるstateの更新はactを使用する
    act(() => {
      screen.getByTestId("get-api").click()
    })
    await waitFor(() => {
      // 100件取得、要素が描画されていること
      const posts = screen.getByTestId("posts")
      expect(posts.childNodes.length).toBe(100);
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
