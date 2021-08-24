import React from "react";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };
  }

  getCountry = (country) => {
    fetch("https://restcountries.eu/rest/v2/name/" + country)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data[0].name,
          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region,
        });
      });
  };

  componentDidMount = () => {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data[0]", data[0]);
        this.setState({
          name: data[0].name,
          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region,
        });
      });
  };

  render() {
    return (
      <>
        <h1>Countries</h1>
        <Button onClick={this.getCountry}>France</Button>
        <Button onClick={this.getCountry}>Brazil</Button>
        <Button onClick={this.getCountry}>Croatia</Button>
        <p>name : {this.state.name}</p>
        <p>capital : {this.state.capital}</p>
        <p>flag : {this.state.flag}</p>
        <p>population : {this.state.population}</p>
        <p>region : {this.state.region}</p>
      </>
    );
  }
}

export default App;
