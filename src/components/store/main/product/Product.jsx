import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductForm from "../productForm/ProductForm";
import ProductItem from "./productItem/ProductItem";
import { ProductContainer } from "./ProductStyled";

export default class Product extends Component {
  state = {
    productsList: [],
  };
  addProduct = (product) => {
    this.setState((prevState) => ({
      productsList: [...prevState.productsList, { ...product, id: uuidv4() }],
    }));
  };

  onHandleRemove = (id) => {
    this.setState((prevState) => {
      const idx = prevState.productsList.findIndex((item) => item.id === id);
      const productsList = [
        ...prevState.productsList.slice(0, idx),
        ...prevState.productsList.slice(idx + 1),
      ];
      return { productsList };
    });
  };

  render() {
    return (
      <ProductContainer>
        <ProductForm addProduct={this.addProduct} />
        <div className="">
          <ul className="">
            {this.state.productsList.map((product) => (
              <ProductItem
                {...product}
                key={product.id}
                onHandleRemove={this.onHandleRemove}
              />
            ))}
          </ul>
        </div>
      </ProductContainer>
    );
  }
}
