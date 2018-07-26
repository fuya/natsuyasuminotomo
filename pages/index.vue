<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <div class="cards">
      <Card 
        v-for="article in articles" 
        :key="article.code"
        :article="article"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import Card from "~/components/Card.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["articles"]),
  },
  async mounted() {
    await this.$store.dispatch("INIT_ARTICLES");
  },
};
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
