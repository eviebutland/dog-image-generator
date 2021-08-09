<template>
  <div class="p-5">
    <RandomImage 
      :randomImage="randomImage" 
      @get-random-image="getRandomDogImage()"
    />
  </div>
</template>

<script>
import RandomImage from '../components/RandomImage.vue'
import axios from 'axios'

export default {
  name: 'Random',
  components: {
    RandomImage
  },
  head: {
    title: 'Random dog image',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Get random dog image using Dog API'
      }
    ],
  },
  data(){
    return {
      randomImage: ""
    }
  },
  methods: {
    
    async getRandomDogImage() {
      try {
        const res =  await axios.get("https://dog.ceo/api/breeds/image/random")
        this.randomImage = res.data.message
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>