import { useState, ReactNode } from 'react'

export function AddToCardButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  console.log(count)

  function addToCart() {
    setCount((state) => state + 1)
  }
  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho</button>
      {children}
    </div>
  )
}
