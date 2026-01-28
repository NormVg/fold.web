<template>
  <div class="bg-background-light dark:bg-background-dark overflow-x-hidden w-screen transition-colors duration-500">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Memory Gallery Section -->
    <MemoryGallerySection />

    <!-- Process Section -->
    <ProcessSection />

    <!-- Fragments Section -->
    <FragmentsSection />

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script setup>
// Set page meta
useHead({
  title: 'Fold - Unfold Your Story - Full Experience',
  meta: [
    { name: 'description', content: 'Fold is a private sanctuary for your memories. Capture the unspoken emotions and fleeting moments in a digital tapestry woven from your life.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ]
})
</script>
