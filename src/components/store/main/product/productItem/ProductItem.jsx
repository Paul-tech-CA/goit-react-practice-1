import React from "react";
import { ProductItemContainer } from "./ProductItemStyled";

const ProductItem = ({
  id,
  name,
  price,
  avatar,
  description,
  sale,
  category,
  onHandleRemove,
}) => {
  return (
    <ProductItemContainer>
      <li>
        <p>- {name}</p>
        <p>- {price}</p>
        <p>- {avatar}</p>
        <p>- {description}</p>
        <p>- {sale}</p>
        <p>- {category}</p>
        <button onClick={() => onHandleRemove(id)}>Delete</button>
      </li>
    </ProductItemContainer>
  );
};

export default ProductItem;
