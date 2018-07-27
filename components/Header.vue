<template>
  <header class="Header">
    <nuxt-link 
      to="/">
      スクラップブック
    </nuxt-link>
    <HeaderUserIcon />
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderUserIcon from "~/components/HeaderUserIcon.vue";

export default Vue.extend({
  components: {
    HeaderUserIcon,
  },
  data: function() {
    return {};
  },
  computed: {},
});
</script>

<style scoped>
</style>
