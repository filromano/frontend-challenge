const updateCountries = (state, value) => {
  state.countries = value;
};

const updateMode = (state, value) => {
  state.darkMode = value;
};

const updateSelectedCountry = (state, value) => {
  state.selectedCountry = value;
};

export default {
  updateCountries,
  updateMode,
  updateSelectedCountry,
};
