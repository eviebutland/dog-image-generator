<template>
  <section class="py-5">
    <div class="flex justify-between">
      <h2 class="text-3xl text-gray-900">Show random dog image</h2>
      <Button text="Get random image" @get-random-image="$emit('get-random-image')"/>
    </div>
    <img v-if="randomImage !== ''"  :src="randomImage" alt="random dog image" class="border-transparent rounded-md"/>
  </section>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'RandomImage',
  props: {
    randomImage: String
  },
  components: [
    Button
  ]
}
</script>