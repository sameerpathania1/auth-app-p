import React, { Component } from "react"
import { toast } from "react-toastify"
import { productsApi } from "../apis/auth";
import { saveObject, getObject } from "../utils";


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
        console.log(name, value)
    }

    onProduct = () => {
        const { product } = this.state
        console.log("atleat prict")
        productsApi(product).then(res => {
            saveObject("product", res.data)
            console.log(res.data, "inside api call")
            toast.success("Product added");
        }).catch(err => {
            console.log(err.message, "error message")
        })
    }

    render() {
        const styles = {
            backgroundColor: "white",
            margin: "auto",
            width: "40%",
            height: "300px"

        }
        return (

            <div style={styles}>
                <input type="text" name="name" placeholder="Product Name" value={this.state.product.name} onChange={this.onChange("product")} />
                <input type="text" name="price" placeholder="Enter Price" value={this.state.product.price} onChange={this.onChange("product")} />
                <h1>your Product name is  {this.state.product.name}</h1>
                <button onClick={this.onProduct} >ADD Products</button>
            </div>
        );
    }
}

export default Products;