<template>
  <section class="py-5">
    <div class="flex justify-between">
      <h2 class="text-3xl text-gray-900">Show dog by breed</h2>
      <form>
        <label class="block">Select a breed</label>
        <select v-model="selectedBreed" @change="$emit('filter-breed', selectedBreed)" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-100" >
          <option v-for="breed of breeds" :key="breed.key">{{breed}}</option>
        </select>
      </form>
    </div>
      <img v-if="selectedBreedImage !== ''" :src="selectedBreedImage" :alt="selectedBreed"/>
  </section>
</template>

<script>
export default {
  name: 'FilteredImage',
  props: {
    selectedBreedImage: String,
    breeds: []
  },
  data() {
    return {
      selectedBreed: "",
    }
  }
}
</script>