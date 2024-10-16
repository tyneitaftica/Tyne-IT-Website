/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const countryColorMap: { [key: string]: string } = {
  "United Kingdom": "#007BFF",
  Kenya: "#007BFF",
  Burundi: "#007BFF",
  // Add other countries as needed
};

const countries = ["Kenya", "United Kingdom", "Burundi"];
interface CountryCode {
  name: string;
}

export const CountriesWeWork = () => {
  const [countryName, setCountryName] = useState(""); // State to hold hovered country name

  const handleMouseEnter = (geo: CountryCode) => {
    setCountryName(geo.name); // Set the name of the hovered country
  };

  const handleMouseLeave = () => {
    setCountryName(""); // Clear the name when hover ends
  };
  return (
    <section className="section light-background">
      <div className="container">
        <div className="countries-container">
          <div className="countries-content">
            <div>
              <h3>Countries We Work In</h3>
              <p>
                At TyneIT Consulting, we connect forward-thinking companies with
                highly skilled remote software developers and IT specialists.
                Leveraging our international presence, we provide tailored
                solutions that meet the unique needs of businesses worldwide,
                driving innovation and ensuring success across diverse markets.
              </p>
            </div>
            <ul className="countries-items">
              {countries.map((country, index) => {
                return (
                  <li className="listItem" key={index}>
                    {country}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="countries-img position-relative">
            <ComposableMap>
              <Geographies geography="/features.json">
                {({ geographies }: { geographies: any }) =>
                  geographies.map((geo: any) => {
                    const countryCode: CountryCode = geo.properties;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => handleMouseEnter(countryCode)}
                        onMouseLeave={handleMouseLeave}
                        fill={countryColorMap[countryCode.name] || "#343a40"} // Default color if not in map
                        stroke="#000" // Borders
                        style={{
                          default: {
                            fill:
                              countryColorMap[countryCode.name] || "#343a40",
                          },
                          hover: {
                            fill: "#007BFF",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
            {countryName && <div className="tooltip">{countryName}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
