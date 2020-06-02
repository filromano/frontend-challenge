import axios from 'axios';

const getCountries = ({ commit }) => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      commit('updateCountries', response.data);
    });
};

export default {
  getCountries,
};
