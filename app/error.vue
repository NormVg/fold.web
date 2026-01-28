<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center px-6">
    <div class="text-center max-w-md mx-auto">
      <div class="mb-8">
        <AppLogo class="w-16 h-16 mx-auto mb-4 text-brand-red" />
        <h1 class="font-display text-4xl text-brand-charcoal dark:text-brand-cream mb-2">
          {{ error.statusCode }}
        </h1>
        <p class="font-sans text-lg text-brand-charcoal/70 dark:text-brand-cream/70">
          {{ error.statusMessage }}
        </p>
      </div>

      <div class="space-y-4">
        <p class="font-sans text-sm text-brand-charcoal/60 dark:text-brand-cream/60">
          Something went wrong while unfolding your story.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="handleError"
            class="glass-button-primary px-6 py-3 rounded-full font-sans text-sm font-medium"
          >
            Try Again
          </button>

          <NuxtLink
            to="/"
            class="glass-button px-6 py-3 rounded-full font-sans text-sm font-medium text-center"
          >
            Go Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>
