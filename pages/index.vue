<template>
  <div class="p-40">
    <div>
      <h1 class="font-bold leading-1 text-gray-900 text-3xl ">Dog pictures</h1>
    </div>
    <NuxtLink to="/random">Get random dog image</NuxtLink>
    <NuxtLink to="/search">Search for dog breeds</NuxtLink>
    <NuxtLink to="/select">Select breed to get dog image</NuxtLink>
    <NuxtChild/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DefaultLayout from '../layouts/default.vue'

export default {
  name: 'Home',
  template: DefaultLayout,
  async created() {
    this.$store.commit('updateBreeds', await this.$store.getters.getAllDogBreeds)
    console.log(this.$store.state.breeds)
  },
  computed: {
    ...mapGetters([
      'getAllDogBreeds'
    ]),
  }
}
</script>
