<template>
  <button class="button button--secondary button--rounded">
    <slot />
  </button>
</template>

<script>
import '../assets/css/button.css';

export default {
  inheritAttrs:true
}
</script>

<style>
</style>