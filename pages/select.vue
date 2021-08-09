<template>
  <div class="p-5">
    <SelectDog 
        :breeds="$store.state.breeds" 
        :selectedBreedImage="selectedBreedImage" 
        @filter-breed="findSelectedBreed"
      />
  </div>
</template>

<script>
import SelectDog from '../components/Select.vue'
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Select',
  data(){
    return {
      selectedBreedImage: "",
      breeds: []
    }
  },
  head: {
    title: 'Select dog by breed to get an image',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Select dog by breed to get an image using Dog API'
      }
    ],
  },
  components: {
    SelectDog
  },
  async created() {
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
    ]),
    async findSelectedBreed(selectedBreed) {
      try {
        const res = await axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        this.selectedBreedImage = res.data.message
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>