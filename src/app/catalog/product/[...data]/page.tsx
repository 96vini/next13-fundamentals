'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  function addToCart() {
    console.log('Added to cart')
  }

  return (
    <div>
      <h1>{productId}</h1>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Enviar</button>
    </div>
  )
}
