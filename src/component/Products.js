import React, { Component } from "react"
import { toast } from "react-toastify"
import actions from "../actions";
import { connect } from "react-redux"
import { Container, Col, Button, Form, FormGroup } from "react-bootstrap"

class Products extends Component {
    state = {
        product: {
            name: "",
            price: "",
            asset: "",
            description: "",
            rating: ""
        },
        loading: true
    }

    _onChange = (key) => ({ target: { value, name } }) => {
        let data = { ...this.state[key] };
        data[name] = value;
        this.setState({ [key]: data })
        console.log(name, value, "imag and data")
    }


    onProduct = (e) => {
        e.preventDefault()
        const { product } = this.state
        console.log(this.state, "state data")
        this.setState({
            loading: true
        })
        actions
            .addproductsapi(product)
            .then(res => {
                this.setState({
                    loadsing: false
                })
                toast.success("Product Added")
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
                console.log("failed to add product")
            })

    }
    showme = (event) => {
        console.log(event)
    }
    render() {
        const { product } = this.state
        return (

            <Container className="addproducts">
                <Col className="addproducts-1" xs={12} sm={4} md={{ span: 4, offset: 4 }}>
                    <Col>
                        <Form onSubmit={this.onProduct}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="text"
                                    placeholder="Enter product Name"
                                    name="name"
                                    value={product.name}
                                    onChange={this._onChange("product")} />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Product Price"
                                    name="price"
                                    value={product.price}
                                    onChange={this._onChange("product")} />
                            </Form.Group>
                            <FormGroup>
                                <Form.Control type="file" name="asset" value={product.asset} onChange={this._onChange("product")} />
                            </FormGroup>
                            <Button
                                type="submit"
                                className="btnsignin"
                                variant="primary"
                                size="lg"
                                block
                                onClick={this.onProduct}
                            >Add Product
                            </Button>
                        </Form>
                    </Col>
                </Col>
            </Container>
        );
    }
}

export default connect(state => state)(Products);