import { useState } from 'react'

//sempre que a função começa com "use", ela é chamada de hook
// imutabilidade = variavel não tem seu valor alterado, mas pode receber um novo valor
// por ex. um array com varios valores

export function Counter() {

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}