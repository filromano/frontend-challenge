<template>
  <div class="container">
    <div class="back-row">
      <button @click="goToHome">
        <ion-icon name="arrow-back"></ion-icon>
        <span>Back</span>
        </button>
    </div>
    <div class="details-content">
      <div class="flag">
        <img :src="selectedCountry.flag" alt="">
      </div>
      <div class="details-txt">
        <p class="title-details">{{ selectedCountry.name }}</p>
        <div class="details-desc">
          <div>
            <p><span class="strong">Native Name: </span>{{ selectedCountry.nativeName }}</p>
            <p><span class="strong">Population: </span>{{ selectedCountry.population }}</p>
            <p><span class="strong">Region: </span>{{ selectedCountry.region }}</p>
            <p><span class="strong">Sub Region: </span>{{ selectedCountry.subregion }}</p>
            <p><span class="strong">Capital: </span>{{ selectedCountry.capital }}</p>
          </div>
          <div>
            <p><span class="strong">Top Level Domain: </span>{{ topLevelDomains }}</p>
            <p><span class="strong">Currencies: </span>{{ currencies }}</p>
            <p><span class="strong">Languages: </span>{{ languages }}</p>
          </div>
        </div>
        <div class="border-countries">
          <div class="border-country">
            <div class="border-country-txt">
              <p class="strong">Border Countries: </p>
            </div>
            <div class="border-country-buttons">
              <button v-for="borderCountry in borderCountries"
                    :key="borderCountry.index"
                    @click="updateCountry(borderCountry.alpha2Code)">
                    {{ borderCountry.name }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedCountry', 'borderCountries', 'languages', 'currencies', 'topLevelDomains']),
  },
  methods: {
    ...mapActions(['getSelectedCountryInfo', 'getSelectedRegion']),
    async updateCountry(country) {
      this.getSelectedCountryInfo(country);
    },
    goToHome() {
      // Reset filter by Region to first value
      this.getSelectedRegion('Filter by Region');
      this.$router.push({ name: 'Home' });
    },
  },
  mounted() {
    this.getSelectedCountryInfo(this.$route.params.alphaCode2);
  },
};
</script>
