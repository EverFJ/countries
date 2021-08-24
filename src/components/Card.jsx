import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.flag} alt="flag" width="300px" />
        <h2 className="mt-4">Country: {this.props.name}</h2>
        <h3 className="mt-4">Capital : {this.props.capital}</h3>
        <h4 className="mt-4">Region : {this.props.region}</h4>
        <h4 className="mt-4">Population : {this.props.population}</h4>
      </>
    );
  }
}

export default Card;
