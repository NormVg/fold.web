export const useEmailSignup = () => {
  const isSubmitting = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const submitEmail = async (email: string) => {
    if (!email || !isValidEmail(email)) {
      error.value = 'Please enter a valid email address'
      return false
    }

    isSubmitting.value = true
    error.value = null
    success.value = false

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate the API call
      await simulateApiCall(email)

      success.value = true
      return true
    } catch (err) {
      error.value = 'Something went wrong. Please try again.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const simulateApiCall = (email: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success most of the time
        if (Math.random() > 0.1) {
          console.log('Email submitted to waitlist:', email)
          resolve()
        } else {
          reject(new Error('API Error'))
        }
      }, 1000)
    })
  }

  const reset = () => {
    error.value = null
    success.value = false
    isSubmitting.value = false
  }

  return {
    isSubmitting: readonly(isSubmitting),
    error: readonly(error),
    success: readonly(success),
    submitEmail,
    reset
  }
}
