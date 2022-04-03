import { useState } from "react"

export default () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (type: "+" | "-") => {
    setCounter((pre: number) => {
      if (type === "+") {
        return pre = pre + 1;
      } else {
        return pre = pre - 1;
      }
    });
  }

  return (
    <div style={{display: "inline-block"}}>
      <span data-testid="counter">{counter}</span>
      {/* screen.getByTestId("hoge") でテスト時に対象エレメントを取得可能 */}
      <button data-testid="add" onClick={(() => handleClick("+"))}>＋</button>
      <button data-testid="minus" onClick={(() => handleClick("-"))}>ー</button>
    </div>
  )
}