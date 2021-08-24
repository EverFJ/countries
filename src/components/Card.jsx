import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card-block mt-1">
        <img className="mt-3" src={this.props.flag} alt="flag" width="300px" />
        <h2 className="mt-3">Country: {this.props.name}</h2>
        <h3 className="mt-3">Capital : {this.props.capital}</h3>
        <h4 className="mt-3">
          <i class="bi bi-globe"></i>Region : {this.props.region}
        </h4>
        <h4 className="mt-3">Population : {this.props.population}</h4>
      </div>
    );
  }
}

export default Card;
