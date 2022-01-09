import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const FlightSearchResultScreen = () => {
  const flightSearch = useSelector((state) => state.flightSearch);
  const { loading, error, flights } = flightSearch;

  const flight = flights[0];
  useEffect(() => {
    console.log(flight);
  });
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default FlightSearchResultScreen;
