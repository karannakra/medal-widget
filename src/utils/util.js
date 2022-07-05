import {
  allowedSortValues,
  allowedSummationValues,
} from "../constant/constant";

export const getTotalCount = (country) => {
  const filteredCount = [];
  for (let [key, value] of Object.entries(country)) {
    if (allowedSummationValues.includes(key)) {
      filteredCount.push(value);
    }
  }
  return filteredCount.reduce((a, b) => +a + +b, 0);
};

export const sortCountries = (countries, sortBy) => {
  const sortedCountries = countries.sort((countryA, countryB) => {
    if (countryA[sortBy] > countryB[sortBy]) {
      return -1;
    } else if (countryA[sortBy] < countryB[sortBy]) {
      return 1;
    } else {
      switch (sortBy) {
        case allowedSortValues.total:
          if (
            countryA[allowedSortValues.gold] > countryB[allowedSortValues.gold]
          ) {
            return -1;
          } else {
            return 1;
          }

        case allowedSortValues.gold:
          if (
            countryA[allowedSortValues.silver] >
            countryB[allowedSortValues.silver]
          ) {
            return -1;
          } else {
            return 1;
          }
        case allowedSortValues.silver:
        case allowedSortValues.bronze:
          if (
            countryA[allowedSortValues.gold] > countryB[allowedSortValues.gold]
          ) {
            return -1;
          } else {
            return 1;
          }

        default:
          const errMsg = new Error("Please provide valid sort value");
          throw errMsg;
      }
    }
  });
  return sortedCountries;
};
