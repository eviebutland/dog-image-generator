<template>
  <div class="p-40">
    <div>
      <h1 class="font-bold leading-1 text-gray-900 text-3xl ">Dog pictures</h1>
    </div>
    <RandomImage 
      :randomImage="randomImage" 
      @get-random-image="getRandomDogImage()"
    />
    <Search :allBreeds="breeds"/>
    <FilteredImage 
      :breeds="breeds" 
      :selectedBreedImage="selectedBreedImage" 
      @filter-breed="findSelectedBreed"
    />
  </div>
</template>

<script>
import DefaultLayout from '../layouts/default.vue'
import axios from 'axios'
import RandomImage from '../components/RandomImage.vue'
import Search from '../components/Search.vue'
import FilteredImage from '../components/FilteredImage.vue'

export default {
  template: DefaultLayout,
  data(){
    return {
      randomImage: "",
      breeds: [],
      selectedBreedImage: ""
    }
  },
  components: {
    RandomImage,
    Search,
    FilteredImage
  },
  async created() {
    this.getAllDogBreeds()
  },
  methods: {
    async getAllDogBreeds(){
      try {
        const res = await axios.get("https://dog.ceo/api/breeds/list/all")
        this.breeds = Object.keys(res.data.message)
      } catch(error){
        console.log(error)
      }
    },
    async getRandomDogImage() {
      try {
        const res =  await axios.get("https://dog.ceo/api/breeds/image/random")
        this.randomImage = res.data.message
      } catch (error) {
        console.log(error)
      }
    },
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
