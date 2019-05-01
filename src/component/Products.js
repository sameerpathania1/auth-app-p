import React, { Component } from "react"
import { toast } from "react-toastify"
import { productsApi } from "../apis/auth";
import { saveObject } from "../utils";


class Products extends Component {
    state = {
        product: {
            name: "",
            price: ""
        }
    }

    onChange = (key) => ({ target: { value, name } }) => {
        let data = { ...this.state[key] };
        data[name] = value;
        this.setState({ [key]: data })
    }

    onProduct = () => {
        const { product } = this.state

        productsApi(product).then(res => {
            saveObject("product", res.data)
            console.log(res, "inside api call")
            toast.success("Product added");
        }).catch(err => {
            console.log(err.message, "error message")
        })
    }

    render() {
        return (

            <div>
                <input type="text" name="name" placeholder="Product Name" value={this.state.name} onChange={this.onChange("product")} />
                <input type="text" name="price" placeholder="Enter Price" value={this.state.price} onChange={this.onChange("product")} />
                <h1>THI {this.state.product.name}</h1>
                <button onClick={this.onProduct} >ADD ITEMS</button>
            </div>
        );
    }
}

export default Products;