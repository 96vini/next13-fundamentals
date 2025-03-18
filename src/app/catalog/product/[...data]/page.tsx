import { AddToCardButton } from './add-to-cart-button'
import { Test } from './test'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  await fetch('https://api.github.com/users/96vini')
  const [productId, size, color] = params.data

  return (
    <div>
      <h1>{productId}</h1>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCardButton>
        <Test />
      </AddToCardButton>
    </div>
  )
}
