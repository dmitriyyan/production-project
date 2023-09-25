import { useState } from 'react'

import classNames from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button className={classNames.btn} onClick={() => setCounter(c => c + 1)}>increment</button>
    </div>
  )
}
