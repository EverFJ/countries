import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      input: "",
      inputIsCorrect: true,
    };
  }

  getCountryWithButtons = (country) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleButtonClick = (country) => {
    fetch("https://restcountries.eu/rest/v2/name/" + country)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: data[0].name,
          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region,
          inputIsCorrect: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ inputIsCorrect: false });
      });
  };

  componentDidMount = () => {
    fetch("https://restcountries.eu/rest/v2/name/france")
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

  render() {
    return (
      <>
        <h1 className="text-center mt-1">Countries</h1>

        {/* BUTTONS */}
        {/* <div className="text-center mt-3">
          <Button onClick={this.getCountryWithButtons}>France</Button>
          <Button onClick={this.getCountryWithButtons}>Brazil</Button>
          <Button onClick={this.getCountryWithButtons}>Croatia</Button>
        </div> */}

        {/* INPUT SEARCH */}
        <div>
          <Input
            onChange={this.handleInputChange}
            onClick={this.handleButtonClick}
            value={this.state.input}
          />
        </div>

        {/* CARD OUTPUT */}
        {this.state.inputIsCorrect ? (
          <div className="text-center">
            <Card
              name={this.state.name}
              capital={this.state.capital}
              flag={this.state.flag}
              population={this.state.population}
              region={this.state.region}
            />
          </div>
        ) : (
          <p className="text-center mt-3">
            We did'nt find the country you were looking for (search in english)
          </p>
        )}
      </>
    );
  }
}

export default App;
