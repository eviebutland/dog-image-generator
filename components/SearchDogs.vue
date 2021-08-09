<template>
  <section class="py-5">
    <div class="flex justify-between">
      <h2 class="text-3xl text-gray-900">Get dog breeds</h2>
      <form @submit="((e) => e.preventDefault())" class="py-4">
        <label for="searchBreed" class="text-sm text-gray-500 block">Search for breed by letter</label>
        <input type="text" name="searchBreed" v-model="searchedBreed" @change="searchBreed(searchedBreed)" class="block items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      </form>
    </div>
    <div v-if="filteredBreeds.length > 0">
      <ul v-for="match in filteredBreeds" :key="match" class="px-10 flex">
        <li>{{match}}</li>
      </ul>
    </div>
    </section>
</template>
<script>
export default {
  name: 'SearchDog',
  props: {
    allBreeds: []
  },
  data() {
    return {
      filteredBreeds: [],
      searchedBreed: ""
    }
  },
  methods: {
    searchBreed(searchedBreed){
      const allBreeds = this.allBreeds
      const matches = allBreeds.filter((breed) => breed.includes(searchedBreed))
      this.filteredBreeds = matches
    }
  }
}
</script>