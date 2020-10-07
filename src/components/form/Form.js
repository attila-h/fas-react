import React, { useRef } from "react";
import AirportChoose from "./AirportChoose";
import DatePicker from "./DatePicker";

export default function Form() {
  const fromAirport = useRef();
  const toAirport = useRef();

  return (
    <div className="search-area">
      <AirportChoose
        inputId="airportOne"
        label="From: "
        reference={fromAirport}
      />
      <AirportChoose inputId="airportTwo" label="To: " reference={toAirport} />
      <DatePicker label="Departure Date" />
      <DatePicker label="Arrival Date" />
      <button className="search-button">Search</button>
    </div>
  );
}
