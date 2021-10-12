import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  totalPrice: number
  results: Array<{
    id: number
    price: number
    priceFormatted: string
    title: string
  }>
  onAddToWishlist: (id: number) => void
}

export function SearchResult({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {

  return (
    <div>
      <h3>{totalPrice}</h3>
      {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        )
      })}
    </div>
  )
}