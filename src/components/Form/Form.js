import axios from "axios";
import React, { Component } from "react";
import "./Form.css";
import Weather from "../Weather/Weather";

export default class Form extends Component {
  state = {
    imgURL: "",
    description: "",
    city: "",
    country: "",
    Temperature: "",
    Humidity: "",
    error: "",
  };
  getWeather = (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    if (city !== "" && country !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&units=metric&appid=f0b17076ce4264d3efdc39da00c344bd`
        )
        .then((resp) => {
          const url = `https://openweathermap.org/img/w/${resp.data.weather[0].icon}.png`;
          console.log(resp.data);
          this.setState({
            imgURL: url,
            description: resp.data.weather[0].description,
            city: resp.data.name,
            country: resp.data.sys.country,
            Temperature: resp.data.main.temp,
            Humidity: resp.data.main.humidity,
            error: "",
          });
          e.target.elements.country.value = "";
          e.target.elements.city.value = "";
        })
        .catch((error) => {
          if (error) {
            this.setState({
              imgURL: "",
              description: "",
              city: "",
              country: "",
              Temperature: "",
              Humidity: "",
              error: "Country or City name is incorrect!",
            });
          }
        });
    } else {
      this.setState({
        imgURL: "",
        description: "",
        city: "",
        country: "",
        Temperature: "",
        Humidity: "",
        error: "Please fill the fields!",
      });
    }
  };

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.getWeather}>
          <div className="overlay"></div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter Country..."
            name="country"
          />
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter City..."
            name="city"
          />
          <button>Get Weather</button>
          <p className="error">{this.state.error}</p>
          <Weather
            imgURL={this.state.imgURL}
            description={this.state.description}
            city={this.state.city}
            country={this.state.country}
            Temperature={this.state.Temperature}
            Humidity={this.state.Humidity}
          />
        </form>
      </div>
    );
  }
}
