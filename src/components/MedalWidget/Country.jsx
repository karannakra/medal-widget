//File Name: Country.jsx
//Creation Date:05/07/2022
//Description: Country Component which will render the single country row.

import React from "react";
import { allowedSortValues } from "../../constant/constant";
const Country = ({ country }) => {
  return (
    <tr>
      <td colSpan={10}>
        <div className="medal-widget_country-info">
          <span>{country.index}</span>
          <img
            width={50}
            height={30}
            src={`https://countryflagsapi.com/png/${country.code}`}
            alt={country.code}
          />
          <span>{country.code}</span>
        </div>
      </td>
      {Object.keys(country)
        .filter((key) => Object.keys(allowedSortValues).includes(key))
        .map((key, index) => {
          return <td key={index}>{country[key]}</td>;
        })}
    </tr>
  );
};

export default Country;
