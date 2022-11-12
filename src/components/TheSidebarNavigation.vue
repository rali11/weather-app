<template>
  <nav :class="['sidebar-navigation',value ? 'sidebar-navigation--hide':''] ">    
    <header class="sidebar-navigation__search">            
      <button 
        class="sidebar-navigation__close-button"
        @click="$emit('change', true)"
      >
        <span class="material-icons">
          close
        </span>
      </button>
      <base-search-input 
        v-model="searchInput"
        :loading="searchLoading"
      />      
      <base-primary-button @click="getCities">
        Search
      </base-primary-button>
    </header>
    <main>
      <base-list-search 
        v-if="listCity.length > 0"
        v-model="selectedCity"
        :list-data="listCity"
        :loading="loadingWeather"
      />
      <h3 
        v-else
        class="no-results"
      >
        No results
      </h3>
    </main>
  </nav>
</template>

<script>
import BaseListSearch from './BaseListSearch.vue'
import BasePrimaryButton from './BasePrimaryButton.vue'
import BaseSearchInput from './BaseSearchInput.vue'
import GetCityCoordinates from '../api/geocoding';

  export default {
    model:{
      prop:'value',
      event:'change',
    },
    props:{
      value:{
        default: true,
        type: Boolean,
      }
    },
    components: { 
      BasePrimaryButton, 
      BaseSearchInput, 
      BaseListSearch 
    },
    data(){
      return {
        searchInput:'',
        listCity:[],
        selectedCity:{},
        searchLoading:false,
        loadingWeather:false,
      }
    },
    watch:{
      selectedCity(newVal){
        const {latitude, longitude} = newVal;
        this.getWeather(latitude, longitude);
      }
    },
    methods:{
      async getCities(){
        try {
          this.searchLoading = !this.searchLoading;
          this.listCity = await GetCityCoordinates(this.searchInput);            
        } catch (error) {
          console.log(error);
        }  finally {
           this.searchLoading = !this.searchLoading;  
        }
      },
      async getWeather(latitude, longitude){
        try {
          this.loadingWeather = !this.loadingWeather;
          await this.$store.dispatch('getCurrentWeather', {latitude, longitude});
          await this.$store.dispatch('getForecast', {latitude, longitude});
          this.loadingWeather = !this.loadingWeather;    
          this.$emit('change', true)      
        } catch (error) {
          console.log(error);
        } 
      }
    }
  }
</script>

<style scoped>
  .sidebar-navigation {    
    display:flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
    width: var(--side-bar);
    height: 100vh;
    background-color: #1E213A;
    padding: 0 2.5rem;    
    transition: transform .5s;
  }
  .sidebar-navigation--hide {
    transform: translateX(calc(var(--side-bar)*-1));
    transition: transform .5s;
  }
  .sidebar-navigation__search {
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: 2rem;
    column-gap: 1rem;
    justify-content: stretch;
    padding-top: 1rem;
  }
  .sidebar-navigation__close-button {
    grid-column: 1 / -1;
    justify-self: end;
    background-color: transparent;
    border-width: 0;
    color:#E7E7EB;
  }
  .sidebar-navigation__close-button > .material-icons {
    font-size: 2rem;
  }
  .no-results {
    width: 100%;
    text-align: center;
    color:#E7E7EB;
  }
</style>