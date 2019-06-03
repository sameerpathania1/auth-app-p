import React, { Component } from "react";
import actions from "../../actions";
import { connect } from "react-redux";
import { Row, Col, Modal, Button } from "react-bootstrap";
import ShowProductCard from "../../component/ShowProductCard";
import { deleteproduct } from "../../apis/deleteproduct";
import { toast } from "react-toastify";
import Loader from "../../component/loaders/Loaderinside";

class ShowProducts extends Component {
  state = {
    values: [],
    show: false,
    show2: false,
    isloading: false,
    loadingsingle: false
  };

  handleShow2 = () => {
    this.setState({
      show2: !this.state.show2
    });
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  componentDidMount() {
    this.setState({
      isloading: true
    });
    this.getProducts()
      .then(res => {
        this.setState({
          isloading: false
        });
        const { values } = res;
      })
      .catch(() => {
        this.setState({
          isloading: false
        });
      });
  }

  getProducts = e => {
    return actions.getProducts();
  };

  selectProduct = productId => {
    this.setState({
      loadingsingle: true
    });
    return actions
      .getProduct(productId)
      .then(() => {
        this.handleShow();
        this.setState({
          loadingsingle: false
        });
      })
      .catch(err => {
        this.setState({
          loadingsingle: false
        });
        toast.error(err.response.data.message || "Something went wrong");
      });
  };

  refreshpage = () => {
    this.props.history.push("/showproducts");
  };

  deleteproduct = productId => {
    if (this.state.show2) {
      deleteproduct(productId)
        .then(() => {
          this.getProducts();
          this.handleShow2();
          this.handleShow();
          toast.success("Product Deleted");
        })
        .catch(err => {
          this.setState({
            show2: false
          });
          console.log(
            err.response.data.message ||
            "Something went Wrong or Product already deleted"
          );
        });
    }
  };

  render() {
    const styles = {
      borderRadius: 4
    };


    const { products = [], product = {}, productsCount } = this.props.products;
    const { isloading, loadingsingle } = this.state;
    console.log(product, "product details");
    const productimg = product.asset && product.asset.url

    return (
      <div>
        <Col style={{ padding: 0 }}>
          {isloading ? null : <h1>Total Products: &nbsp;{productsCount}</h1>}
        </Col>
        <Row className="list-wrapper-2">
          {products && products.length
            ? products.map(item => {
              return (
                <ShowProductCard
                  imageurl={item.asset.url}
                  name={item.name}
                  imagealt={0}
                  price={item.price}
                  onclick={() => this.selectProduct(item.id)}

                />
              );
            })
            : isloading && (
              <div className="custom-loader">
                <Loader />
              </div>
            )}
        </Row>

        {loadingsingle ? (
          <div className="custom-loader">
            <Loader />
          </div>
        ) : (
            <Modal
              size="lg"
              show={this.state.show}
              onHide={() => this.handleShow()}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Product Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col className="modal-image">
                    {product.asset && product.asset.url && product.asset.url.length ? <img style={styles} src={productimg} alt="product-img" /> : <div style={{ backgroundColor: "#dfdfdf", borderRadius: "4px", width: 400, height: 400 }} ></div>}
                  </Col>
                  <Col>
                    <h3>Name: {product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>
                      Details:
                      {product.description && product.description.length
                        ? product.description
                        : "No Details"}
                    </p>
                    <Row style={{ margin: 0 }}>
                      <Button variant="danger" onClick={() => this.handleShow2()}>
                        Delete Product
                    </Button>
                      &nbsp;
                    <Button variant="info" onClick={() => this.handleShow()}>
                        Close
                    </Button>
                    </Row>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          )}

        <Modal size="sm" show={this.state.show2} onHide={this.handleShow2}>
          <Modal.Body>
            <Col style={{ padding: 0 }}>
              <h3 style={{ textAlign: "center" }}>Confrim Delete</h3>
              <Row style={{ textAlign: "center", marginTop: 10 }}>
                <Button
                  style={{ margin: "auto", width: "30%" }}
                  variant="success"
                  onClick={() => this.deleteproduct(product.id)}
                >
                  YES
                </Button>
                <Button
                  variant="secondary"
                  style={{ margin: "auto", width: "30%" }}
                  onClick={() => this.handleShow2()}
                >
                  NO
                </Button>
              </Row>
            </Col>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default connect(state => state)(ShowProducts);