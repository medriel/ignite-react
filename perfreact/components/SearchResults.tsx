import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
}

export function SearchResult({ results }: SearchResultsProps) {

  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h3>{totalPrice}</h3>
      {results.map(product => {
        return (
          <ProductItem product={product} />
        )
      })}
    </div>
  )
}