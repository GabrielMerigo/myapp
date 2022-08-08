import { createContext, Dispatch, SetStateAction, useState } from 'react';

type CounterContextProps = {
  setCounter: Dispatch<SetStateAction<number>>
  doubleCounter: number,
  setDoubleCounter: Dispatch<SetStateAction<number>>
  counter: number
}

export const CounterContext = createContext({} as CounterContextProps);

type CounterContextProviderProps = {
  children: React.ReactNode
}

export function CounterContextProvider({ children }: CounterContextProviderProps) {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(0);

  return (
    <CounterContext.Provider value={{
      setCounter,
      doubleCounter,
      setDoubleCounter,
      counter
    }}>
      {children}
    </CounterContext.Provider>
  )
}