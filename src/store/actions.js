import axios from 'axios';

const getCountries = ({ commit, dispatch }, value) => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      commit('updateCountries', response.data);
      const regions = [];
      response.data.forEach((country) => {
        regions.push(country.region);
      });
      commit('updateRegions', regions);
      if (value) {
        dispatch('getSelectedCountry', value);
      }
    });
};

const changeMode = ({ commit }, value) => {
  commit('updateMode', value);
};

const getSelectedCountry = ({ state, commit }, value) => {
  state.countries.forEach((element) => {
    if (element.alpha2Code === value) {
      commit('updateSelectedCountry', element);
    }
  });
};

const getBorderCountries = ({ commit, state }) => {
  const borders = state.selectedCountry.borders.map((element) => {
    let border = {};
    state.countries.forEach((el) => {
      if (element === el.alpha3Code) {
        border = {
          name: el.name,
          alpha2Code: el.alpha2Code,
        };
      }
    });
    return border;
  });
  commit('updateBorderCountries', borders);
};

const formatInfo = ({ commit }) => {
  commit('formatCurrencies');
  commit('formatLanguages');
};

const getSelectedRegion = ({ commit }, value) => {
  commit('updateSelectedRegion', value);
};

export default {
  getCountries,
  changeMode,
  getSelectedCountry,
  getBorderCountries,
  formatInfo,
  getSelectedRegion,
};
