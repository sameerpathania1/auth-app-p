import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


class ShowProducts extends Component {
    state = {

        values: []
    }

    componentDidMount() {
        this.getProducts().then(res => {
            const { values } = res;
            if (values && values.length) {
                this.selectProduct(values[0].id);
            }
        })
    }

    getProducts = () => {
        return actions.getProducts();
    }

    selectProduct = (productId) => {
        return actions.getProduct(productId);
    }


    render() {
        const { products = [], product = {} } = this.props.products;

        return (
            <Row>
                <Col xs={12} sm={6} m={6} className="list-wrapper">
                    {products && products.length ? products.map(item => {
                        return <div key={item.id} onClick={() => this.selectProduct(item.id)}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <img src={item.asset.url} />
                        </div>
                    }) : <div>No items found!</div>}
                </Col>
                <Col xs={12} sm={6} m={6}>
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default connect(state => state)(ShowProducts);