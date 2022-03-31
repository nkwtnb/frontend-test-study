import { useState } from "react"

export default () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (type: "+" | "-") => {
    setCounter((pre: number) => {
      console.log(pre);
      if (type === "+") {
        return pre = pre + 1;
      } else {
        return pre = pre - 1;
      }
    });
  }

  return (
    <div>
      <span data-testid="counter">{counter}</span>
      <button data-testid="add" onClick={(() => handleClick("+"))}>＋</button>
      <button data-testid="minus" onClick={(() => handleClick("-"))}>ー</button>
    </div>
  )
}