// TemperatureConverter.tsx

import React, { Component } from "react";
import './TemperatureConverter.css';

interface State {
  temperature: number;
  scale: "Celsius" | "Fahrenheit";
}

class TemperatureConverter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      temperature: 0,
      scale: "Celsius",
    };
  }

  handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      temperature: parseFloat(e.target.value),
    });
  };

  handleScaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      scale: e.target.value as "Celsius" | "Fahrenheit",
    });
  };

  convertTemperature = (): number => {
    const { temperature, scale } = this.state;
    if (scale === "Celsius") {
      return (temperature * 9) / 5 + 32; // Convert to Fahrenheit
    } else {
      return ((temperature - 32) * 5) / 9; // Convert to Celsius
    }
  };

  render() {
    const { temperature, scale } = this.state;
    const convertedTemperature = this.convertTemperature();
    const convertedScale = scale === "Celsius" ? "Fahrenheit" : "Celsius";

    return (
      <div className="converter-container">
        <label className="temperature-label">
          Enter Temperature in {scale}:
          <input
            className="temperature-input"
            type="number"
            value={temperature}
            onChange={this.handleTemperatureChange}
          />
        </label>
        <br />
        <label className="scale-label">
          Select Scale:
          <select className="scale-select" value={scale} onChange={this.handleScaleChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </label>
        <h2 className="converted-temperature">
          Converted Temperature: {convertedTemperature.toFixed(2)}° {convertedScale}
        </h2>
      </div>
    );
  }
}

export default TemperatureConverter;
