<template>
  <form
    class="relative group"
    id="join"
    @submit.prevent="handleSubmit"
  >
    <input
      v-model="email"
      class="input-glass w-full rounded-full py-4 pl-8 pr-16 text-brand-charcoal font-medium placeholder-brand-charcoal/50 outline-none focus:ring-2 focus:ring-brand-red/30 font-sans text-lg transition-all shadow-xl"
      placeholder="Enter your email for early access"
      type="email"
      required
      :disabled="isSubmitting"
    />
    <button
      class="absolute right-2 top-2 bottom-2 bg-brand-red text-brand-cream rounded-full w-12 h-12 flex items-center justify-center hover:bg-brand-red-light transition-colors shadow-md disabled:opacity-50"
      type="submit"
      :disabled="isSubmitting || !email"
    >
      <span class="material-icons-outlined text-2xl">
        {{ isSubmitting ? 'hourglass_empty' : 'arrow_forward' }}
      </span>
    </button>

    <!-- Success Message -->
    <div v-if="success" class="absolute -bottom-8 left-0 right-0 text-center">
      <p class="text-brand-cream/80 text-sm">✨ Thank you for joining our waitlist!</p>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="absolute -bottom-8 left-0 right-0 text-center">
      <p class="text-red-200 text-sm">{{ error }}</p>
    </div>
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
