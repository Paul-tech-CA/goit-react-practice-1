import React, { Component } from "react";
import { ProductFormContainer } from "./ProductFormStiled";

const categories = ["fruits", "drinks", "close", "books"];

const initialState = {
  name: "",
  price: "",
  avatar: "",
  description: "",
  sale: false,
  category: categories[0],
};

export default class ProductForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState((prevState) => ({
        sale: !prevState.sale,
      }));
      return;
    }
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { name, price, avatar, description, category } = this.state;
    return (
      <ProductFormContainer>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            {" "}
            Name:
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            {" "}
            Price:
            <input
              name="price"
              type="text"
              value={price}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            {" "}
            Avatar:
            <input
              name="avatar"
              type="text"
              value={avatar}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            {" "}
            Description:
            <textarea
              name="description"
              type="text"
              value={description}
              onChange={this.onHandleChange}
            />
          </label>
          <div className="options">
            <label>
              {" "}
              Category:
              <select
                name="category"
                value={category}
                onChange={this.onHandleChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {" "}
              Sale:
              <input
                name="sale"
                type="checkbox"
                checked={this.state.sale}
                onChange={this.onHandleChange}
              />
            </label>
          </div>
          <button type="submit">Add product</button>
        </form>
      </ProductFormContainer>
    );
  }
}
