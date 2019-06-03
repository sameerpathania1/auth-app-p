import React, { Component } from "react";
import { removeObject, getObject, saveObject } from "../utils";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify"
import { productsApi } from "../apis/auth";
import Axios from "axios";
import NewsCard from "../component/newscard";
import { Row } from "react-bootstrap"
import Loader from "../component/loaders/Loaderinside";

export default class extends Component {
  state = {
    values: [],
    isloading: false
  }

  componentDidMount() {
    const { isloading } = this.state

    this.setState({
      isloading: true
    })

    Axios.get("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b002a1635d0246319bad4f7f8fb577c8")
      .then((res) => {
        this.setState({
          isloading: false,
          values: res.data.articles
        })
      }).catch(err => {
        this.setState({
          isloading: false
        })
        toast.error("error white fetching changes")
      })
  }

  render() {
    const { isloading, values } = this.state
    console.log(this.state.values, "state values")
    return (
      <div style={{ textAlign: "center" }}>
        {isloading ? null : <h1>Your Daily News</h1>}
        {isloading ? <div className="custom-loader">
          <Loader />
        </div> : values.map(item => <NewsCard heading={item.title} imgurl={item.urlToImage} content={item.content} description={item.description} ></NewsCard>)}

      </div >
    )
  }
}
