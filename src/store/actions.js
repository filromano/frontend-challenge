import axios from 'axios';

const getCountries = ({ commit }) => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      commit('updateCountries', response.data);
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

export default {
  getCountries,
  changeMode,
  getSelectedCountry,
};
