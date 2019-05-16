import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ShowProductCard from '../../component/ShowProductCard';


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
            <Row className="list-wrapper-2">
                {products && products.length ? products.map(item => {
                    return <ShowProductCard imageurl={item.asset.url} name={item.name} price={item.price} />
                }) : <div style={{ alignItems: "center", textAlign: "center" }}><h1>Loading please Wait !!</h1></div>}
            </Row>
        );
    }
}

export default connect(state => state)(ShowProducts);