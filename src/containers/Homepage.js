import React, { Component } from "react";
import { removeObject, getObject, saveObject } from "../utils";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify"
import { productsApi } from "../apis/auth";
import Axios from "axios";
import NewsCard from "../component/newscard";

export default class extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    Axios.get("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b002a1635d0246319bad4f7f8fb577c8")
      .then((res) => {
        this.setState({
          values: res.data.articles
        })
      }).catch(err => {
        toast.error("error white fetching changes")
      })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Your Daily News</h1>
        {this.state.values.map(item => <NewsCard heading={item.title} imgurl={item.urlToImage} content={item.content} description={item.description} ></NewsCard>)}

      </div >
    )
  }
}
