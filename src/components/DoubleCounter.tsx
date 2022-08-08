/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { CounterContext } from "../contexts/CounterContext";

export function DoubleCounter() {
  const { counter, setDoubleCounter, doubleCounter } = useContext(CounterContext)

  useEffect(() => {
    setDoubleCounter(counter * 2);
  }, [counter])

  return (
    <div>
      <div>Dobre de counter {doubleCounter}</div>
    </div>
  )
}