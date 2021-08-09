<template>
  <div class="p-5">
    <SearchDog :allBreeds="breeds"/>
  </div>
</template>

<script>
import SearchDog from '../components/SearchDogs.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Search',
  components: {
    SearchDog
  },
  head: {
    title: 'Search for dog by breed',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Search for dog breeds d using Dog API'
      }
    ],
  },
  data() {
    return {
      breeds: []
    }
  },
  async mounted() {
    this.$store.commit('updateBreeds', await this.getAllDogBreeds)
    this.breeds = this.$store.state.breeds
  },
  computed: {
    ...mapGetters([
      'getAllDogBreeds'
    ])
  },
  methods: {
    ...mapMutations([
      'updateBreeds'
    ])
  }
}
</script>