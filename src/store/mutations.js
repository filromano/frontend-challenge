const updateCountries = (state, value) => {
  state.countries = value;
};

const updateRegions = (state, value) => {
  const regions = value.filter((item, index) => value.indexOf(item) === index);
  regions.forEach((element) => {
    state.regions.push(element);
  });
};

const updateSelectedRegion = (state, value) => {
  state.selectedRegion = value;
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

const formatTopLevelDomains = (state) => {
  const domains = state.selectedCountry.topLevelDomain.filter((el) => el);
  state.topLevelDomains = domains.join(', ');
};

const updateBorderCountries = (state, value) => {
  state.borderCountries = value;
};

export default {
  updateCountries,
  updateRegions,
  updateSelectedRegion,
  updateMode,
  updateSelectedCountry,
  formatCurrencies,
  formatLanguages,
  formatTopLevelDomains,
  updateBorderCountries,
};
