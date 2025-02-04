import React from "react";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [formDataCars, setFormDataCars] = useState("");

  const modelCars = {
    marca: "",
    modelo: "",
    motore: "",
    avaible: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const hanldeFormList = (fieldName, value) => {
    setFormDataCars((curentState) => ({
      ...curentState,
      [fieldName]: value,
    }));
  };

  return (
    <div className="container">
      <ul>
        {list.map((item) => (
          <li key={item.marca}>
            {item.modelo} - {item.motore}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="inserisci la marca"
          value={formDataCars.marca}
          onChange={(e) => hanldeFormList("marca", e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="inserisci modelo"
          value={formDataCars.modelo}
          onChange={(e) => hanldeFormList("modelo", e.target.value)}
        ></input>
        <label>Choose a motore:</label>
        <select
          name="motore"
          value={formDataCars.motore}
          nChange={(e) => hanldeFormList("motore", e.target.value)}
        >
          <option value="1.4">1.4</option>
          <option value="1.6">1.6</option>
          <option value="1.8">1.8</option>
          <option value="2.0">2.0</option>
        </select>
        <label htmlFor="">Validazione</label>
        <input
          type="checkbox"
          nChange={(e) => hanldeFormList("modelo", e.target.checked)}
        ></input>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
