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
            description: "",
            rating: ""
        },
        asset: {
            url: ""
        },
        file: [],
        loading: true
    }

    onChange = ({ target: { value, name, files = [] } }) => {
        let product = {
            ...this.state.product,
            [name]: value
        };

        this.setState({
            product,
            file: files && files.length ? files[0] : {}
        });
    }

    onProduct = (e) => {
        e.preventDefault()
        const { product, file } = this.state
        this.setState({
            loading: true
        })
        actions
            .addproductsapi(product, file)
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
    render() {
        const { product } = this.state
        return (
            <Container className="addproducts">
                <Col className="addproducts-1">
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
                                    onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Product Price"
                                    name="price"
                                    value={product.price}
                                    onChange={this.onChange} />
                            </Form.Group>
                            <FormGroup>
                                <Form.Control type="file" name="asset" value={product.asset} onChange={this.onChange} />
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