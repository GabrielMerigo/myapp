import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext";


export function Counter() {
  const { setCounter, counter } = useContext(CounterContext)

  function handleCounter() {
    setCounter(counter + 1)
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleCounter}>Aumentar</button>
    </>
  )
}