<template>
  <div class="container">
    <div>
      <button>Back</button>
    </div>
    <div class="details-content">
      <div class="flag">
        <img :src="selectedCountry.flag" alt="">
      </div>
      <div class="details-txt">
        <p>{{ selectedCountry.name }}</p>
        <div class="details-desc">
          <div>
            <p><span>Native Name: </span>{{ selectedCountry.nativeName }}</p>
            <p><span>Population: </span>{{ selectedCountry.population }}</p>
            <p><span>Region: </span>{{ selectedCountry.region }}</p>
            <p><span>Sub Region: </span>{{ selectedCountry.capital }}</p>
            <p><span>Capital: </span>{{ selectedCountry.capital }}</p>
          </div>
          <div>
            <p><span>Top Level Domain: </span>{{ selectedCountry.capital }}</p>
            <p><span>Currencies: </span>{{ currencies }}</p>
            <p><span>Languages: </span>{{ languages }}</p>
          </div>
        </div>
        <div class="border-countries">
          <p>
            Border Countries:
            <button v-for="borderCountry in borderCountries"
                    :key="borderCountry.index"
                    @click="updateCountry(borderCountry.alpha2Code)">
                    {{ borderCountry.name }}</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedCountry', 'borderCountries', 'languages', 'currencies']),
  },
  methods: {
    ...mapActions(['getSelectedCountry', 'getBorderCountries', 'formatInfo']),
    async updateCountry(country) {
      await this.getSelectedCountry(country);
      this.formatInfo();
      this.getBorderCountries();
    },
  },
  mounted() {
    this.formatInfo();
    this.getBorderCountries();
  },
};
</script>
