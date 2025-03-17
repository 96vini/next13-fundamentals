import { useState } from 'react'

export function AddToCardButton() {
  const [count, setCount] = useState(0)

  console.log(count)

  function addToCart() {
    setCount((state) => state + 1)
  }
  return <button onClick={addToCart}>Adicionar ao carrinho</button>
}
