<template>
  <div class="min-h-screen">
    <slot />
  </div>
</template>

<script setup>
// Initialize theme on app load
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
