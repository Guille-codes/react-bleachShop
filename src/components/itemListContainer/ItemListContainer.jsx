import "./ItemListContainer.css"
import React from 'react'

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="item-container">
    <div>{greeting}</div>
    </div>
  )
}

export default ItemListContainer