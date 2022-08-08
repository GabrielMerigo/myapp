import React from "react";
import { Counter } from './components/Counter';
import { DoubleCounter } from './components/DoubleCounter';


export default function Home() {

  return (
    <>
      <DoubleCounter />
      <Counter />
    </>
  )
}