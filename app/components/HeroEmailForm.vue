<template>
  <form
    class="relative group"
    id="join"
    @submit.prevent="handleSubmit"
  >
    <div class="relative">
      <input
        v-model="email"
        class="input-glass w-full rounded-full py-3 md:py-4 pl-6 md:pl-8 pr-14 md:pr-16 text-brand-charcoal font-medium placeholder-brand-charcoal/50 outline-none focus:ring-2 focus:ring-brand-red/30 font-sans text-base md:text-lg transition-all shadow-xl"
        placeholder="Enter your email for early access"
        type="email"
        required
        :disabled="isSubmitting"
      />
      <button
        class="absolute right-1.5 md:right-2 top-1.5 md:top-2 bottom-1.5 md:bottom-2 bg-brand-red text-brand-cream rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-brand-red-light transition-colors shadow-md disabled:opacity-50"
        type="submit"
        :disabled="isSubmitting || !email"
      >
        <span class="material-icons-outlined text-xl md:text-2xl">
          {{ isSubmitting ? 'hourglass_empty' : 'arrow_forward' }}
        </span>
      </button>
    </div>

    <!-- Success Message -->
    <div v-if="success" class="mt-3 text-center">
      <p class="text-brand-cream/80 text-sm">✨ Thank you for joining our waitlist!</p>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="mt-3 text-center">
      <p class="text-red-200 text-sm">{{ error }}</p>
    </div>

    <!-- Newsletter text -->
    <p v-if="!success && !error" class="mt-3 font-sans text-xs md:text-sm text-brand-cream/60 text-center">
      Join our newsletter for exclusive insights into the art of memory keeping.
    </p>
  </form>
</template>

<script setup>
const email = ref('')
const { isSubmitting, error, success, submitEmail, reset } = useEmailSignup()

const handleSubmit = async () => {
  const submitted = await submitEmail(email.value)
  if (submitted) {
    email.value = ''
  }
}

// Reset state when component unmounts
onUnmounted(() => {
  reset()
})
</script>
