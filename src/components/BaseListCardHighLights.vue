<template>
  <div class="card-list">
    <base-card-high-lights />
    <base-card-high-lights />
    <base-card-high-lights />
    <base-card-high-lights />
    <base-card-high-lights />
  </div>
</template>

<script>
import BaseCardHighLights from './BaseCardHighLights.vue';
export default {
  components: {
      BaseCardHighLights
    }
}
</script>

<style>
  .card-list {
    display: flex;
    flex-direction: row;
    gap:26px;
  }
</style>