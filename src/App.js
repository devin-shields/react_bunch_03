import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import Modal from "./Modal";

class App extends React.Component {
  constructor() {
    console.log("Constructor running . . .");
    super();
    this.state = {
      temp: "",
      cityName: "",
      weather: "",
      high: "",
      low: "",
      icon: "",
      isRaining: "",
      showModal: true
    };
  }

  componentDidMount() {
    this.getCityWeather("London");
    var elems = document.querySelectorAll(".modal");
    var instances = window.M.Modal.init(elems);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes("rain");
      if (isRaining) {
        this.setState({
          isRaining: "Rain, rain, go away . . ."
        });
      } else {
        this.setState({
          isRaining: ""
        });
      }
    }
  }

  searchCity = e => {
    e.preventDefault();

    const city = document.getElementById("city").value;
    this.getCityWeather(city);
  };

  getCityWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e312dbeb8840e51f92334498a261ca1d`;
    axios.get(url).then(resp => {
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        cityName: resp.data.name,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon
      });
    });
  };

  removeModal = () => this.setState({ showModal: false });

  render() {
    console.log("Rendering . . .");
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}.png`;

    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <button onClick={this.removeModal} className="btn">
              Remove from DOM!
            </button>
            <Header
              cityName={this.state.cityName}
              temp={this.state.temp}
              isRaining={this.state.isRaining}
            />
            <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
            >
              Details
            </a>
            <form onSubmit={this.searchCity}>
              <input text="type" placeholder="Enter a city name" id="city" />
            </form>
          </div>
        </div>
        {this.state.showModal ? (
          <Modal info={this.state} iconUrl={iconUrl} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
