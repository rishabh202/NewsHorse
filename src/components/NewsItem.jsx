import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://www.nationalreview.com/wp-content/uploads/2022/08/ron-desantis-florida02.jpg?fit=2057%2C1200" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetails" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
