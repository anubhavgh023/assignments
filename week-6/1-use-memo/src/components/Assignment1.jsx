import { useEffect, useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // const [expensiveValue, setExpensiveValue] = useState(0);

  // useEffect(() => {
  //   setExpensiveValue(factorial(input))
  // },[input])

  const expensiveValue = useMemo(() => {
    return factorial(input);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Factorial Calculated Value: {expensiveValue}</p>
    </div>
  );
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
