// Animation utilities for the Fold app

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  leave: { opacity: 0, y: -20 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0 },
  leave: { opacity: 0, x: 20 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1 },
  leave: { opacity: 0, scale: 0.9 }
}

// Wave animation configurations
export const waveConfigs = {
  gentle: {
    speeds: [8, 12, 16, 20],
    opacities: [0.9, 0.6, 0.4, 0.2],
    blurs: [1, 2, 1, 3]
  },
  dynamic: {
    speeds: [5, 10, 15, 25],
    opacities: [0.8, 0.7, 0.5, 0.3],
    blurs: [0, 1, 2, 4]
  },
  subtle: {
    speeds: [12, 18, 24, 30],
    opacities: [0.7, 0.5, 0.3, 0.1],
    blurs: [2, 3, 4, 5]
  }
}

// Intersection Observer utility for scroll animations
export const useScrollAnimation = (threshold = 0.1) => {
  const isVisible = ref(false)
  const target = ref<HTMLElement>()

  onMounted(() => {
    if (!target.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) {
          isVisible.value = entry.isIntersecting
        }
      },
      { threshold }
    )

    observer.observe(target.value)

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return { isVisible, target }
}

// Wave animation controller
export const useWaveAnimation = () => {
  const isPlaying = ref(true)
  const currentConfig = ref('gentle')

  const toggleAnimation = () => {
    isPlaying.value = !isPlaying.value
  }

  const setConfig = (config: keyof typeof waveConfigs) => {
    currentConfig.value = config
  }

  return {
    isPlaying: readonly(isPlaying),
    currentConfig: readonly(currentConfig),
    toggleAnimation,
    setConfig
  }
}
