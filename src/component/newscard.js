import React, { Component } from 'react';

class NewsCard extends Component {
   state = {}
   render() {
      return (<div style={{ background: "white", padding: 10, margin: 10, borderRadius: 6 }}>
         <h3>{this.props.heading}</h3>
         <img style={{ width: "70%" }} src={this.props.imgurl} alt="news" />
         <p>{this.props.description}</p>
         <p>{this.props.content}</p>
      </div>);
   }
}

export default NewsCard;