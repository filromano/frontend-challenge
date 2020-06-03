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

export default {
  getCountries,
  changeMode,
};
