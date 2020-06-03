const updateCountries = (state, value) => {
  state.countries = value;
};

const updateMode = (state, value) => {
  state.darkMode = value;
};

export default {
  updateCountries,
  updateMode,
};
