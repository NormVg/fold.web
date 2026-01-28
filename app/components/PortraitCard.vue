<template>
  <div class="bg-white p-3 rounded-2xl shadow-md rotate-2 hover:rotate-0 transition-transform duration-300 w-3/4 mx-auto">
    <img
      :alt="alt"
      class="w-full aspect-square object-cover rounded-xl filter grayscale contrast-125"
      :src="image"
    />
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Portrait'
  }
})
</script>
