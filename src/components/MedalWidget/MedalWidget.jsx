
//File Name: MedalWidget.jsx
//Creation Date:05/07/2022
//Description: MedalWidget Component which holds the logic of data rendering.

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  allowedSortValues,
  MEDAL_COLOR_CONSTANT,
} from "../../constant/constant";
import medalJson from "../../constant/medals.json";
import { getTotalCount, sortCountries } from "../../utils/util";
import Country from "./Country";

const defaultSortValue = allowedSortValues.bronze;

const MedalWidget = ({ sort = defaultSortValue, element_id = "root" }) => {
  const [countriesData, setCountriesData] = useState(medalJson);

  const [selectedSort, setSelectedSort] = useState(
    Object.keys(allowedSortValues).includes(sort) ? sort : defaultSortValue
  );

  useEffect(() => {
    const updatedCountriesData = countriesData.map((country) => {
      const totalCount = getTotalCount(country);
      return {
        ...country,
        total: totalCount,
      };
    });
    let sortedCountries = sortCountries(updatedCountriesData, selectedSort).map(
      (country, index) => ({ ...country, index: index + 1 })
    );

    setCountriesData(sortedCountries);
  }, [selectedSort]);

  const onChangeSelected = (selectedSort) => {
    setSelectedSort(selectedSort);
  };

  return ReactDOM.createPortal(
    <div className="medal-widget__wrapper">
      <table className="medal-widget__table">
        <thead>
          <caption className="widget-title">MEDAL COUNT</caption>
          <tr>
            <th colSpan={10}></th>
            {MEDAL_COLOR_CONSTANT.map((colorItem, index) => (
              <th
                key={index}
                className={`medal-colors ${
                  selectedSort === colorItem.colorName ? "selected" : ""
                }`}
              >
                <span
                  onClick={onChangeSelected.bind(this, colorItem.colorName)}
                  style={{ backgroundColor: colorItem.hexCode }}
                ></span>
              </th>
            ))}
            <th
              className={` ${
                selectedSort === allowedSortValues.total ? "selected" : ""
              } `}
            >
              <span
                onClick={onChangeSelected.bind(this, allowedSortValues.total)}
                className="cursor-pointer"
              >
                TOTAL
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {countriesData.map((country, index) => (
            <Country key={index} country={country} />
          ))}
        </tbody>
      </table>
    </div>,
    document.getElementById(element_id)
  );
};
export default MedalWidget;
