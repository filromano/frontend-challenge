const updateCountries = (state, value) => {
  state.countries = value;
};

const updateMode = (state, value) => {
  state.darkMode = value;
};

const updateSelectedCountry = (state, value) => {
  state.selectedCountry = value;
};

const formatCurrencies = (state) => {
  const currencies = state.selectedCountry.currencies.map((el) => el.name);
  state.currencies = currencies.join(', ');
};

const formatLanguages = (state) => {
  const languages = state.selectedCountry.languages.map((el) => el.name);
  state.languages = languages.join(', ');
};

const updateBorderCountries = (state, value) => {
  state.borderCountries = value;
};

export default {
  updateCountries,
  updateMode,
  updateSelectedCountry,
  formatCurrencies,
  formatLanguages,
  updateBorderCountries,
};
