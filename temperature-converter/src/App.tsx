// App.tsx
import React from "react";
import TemperatureConverter from "./TemperatureConverter";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Temperature Converter</h1>
      <TemperatureConverter />
    </div>
  );
};

export default App;
