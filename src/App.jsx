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

  const hanldeFormList = (fieldName, value) => {
    setFormDataCars((curentState) => ({
      ...curentState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setList((currentList) => [...currentList, formDataCars]);
    setFormDataCars({
      marca: "",
      modelo: "",
      motore: "",
      avaible: false,
    });
  };

  const handleCarList = (itemDeleteCar) => {
    setList((currentState) =>
      currentState.filter((item) => item !== itemDeleteCar)
    );
  };

  const handleDeleteList = () => {
    setList([]);
  };

  return (
    <div className="container">
      <h1>Lista macchine</h1>
      <ul>
        {list.map((item, index) => (
          <li key={item.marca}>
            {index} - {item.modelo} - {item.motore} ----
            <strong>{item.avaible ? "disponibile" : "non disponibine"}</strong>
            <button onClick={() => handleCarList(item)}>🗑️</button>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteList}>Cancella lista</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="inserisci la marca"
          value={formDataCars.marca}
          onChange={(e) => hanldeFormList("marca", e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="inserisci modelo"
          value={formDataCars.modelo}
          onChange={(e) => hanldeFormList("modelo", e.target.value)}
          required
        ></input>
        <label>Choose a motore:</label>
        <select
          name="motore"
          value={formDataCars.motore}
          onChange={(e) => hanldeFormList("motore", e.target.value)}
          required
        >
          <option value="">None</option>
          <option value="1.4">1.4</option>
          <option value="1.6">1.6</option>
          <option value="1.8">1.8</option>
          <option value="2.0">2.0</option>
        </select>
        <label htmlFor="">Validazione</label>
        <input
          type="checkbox"
          onChange={(e) => hanldeFormList("avaible", e.target.checked)}
        ></input>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
