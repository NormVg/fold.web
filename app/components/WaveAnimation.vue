<template>
  <div ref="waveContainer" class="wave-container">
    <canvas
      ref="waveCanvas"
      class="wave-canvas"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
    <div class="wave-overlay"></div>
  </div>
</template>

<script setup>
const waveContainer = ref(null)
const waveCanvas = ref(null)
const canvasWidth = ref(800)
const canvasHeight = ref(600)

let animationId = null
let ctx = null
let time = 0

// Wave configuration matching the original image colors
const waveConfig = {
  layers: [
    {
      amplitude: 80,
      frequency: 0.008,
      speed: 0.02,
      color: 'rgba(220, 100, 80, 0.8)', // Lighter red-orange
      offset: 0
    },
    {
      amplitude: 60,
      frequency: 0.012,
      speed: 0.015,
      color: 'rgba(200, 80, 60, 0.7)', // Medium red
      offset: Math.PI / 3
    },
    {
      amplitude: 100,
      frequency: 0.006,
      speed: 0.025,
      color: 'rgba(180, 60, 40, 0.6)', // Deeper red
      offset: Math.PI / 2
    },
    {
      amplitude: 70,
      frequency: 0.01,
      speed: 0.018,
      color: 'rgba(160, 40, 30, 0.5)', // Dark red
      offset: Math.PI
    },
    {
      amplitude: 90,
      frequency: 0.007,
      speed: 0.022,
      color: 'rgba(140, 30, 20, 0.4)', // Very dark red
      offset: Math.PI * 1.5
    }
  ]
}

const resizeCanvas = () => {
  if (!waveContainer.value || !waveCanvas.value) return

  const rect = waveContainer.value.getBoundingClientRect()
  canvasWidth.value = rect.width
  canvasHeight.value = rect.height

  // Set actual canvas size for crisp rendering
  const canvas = waveCanvas.value
  const dpr = window.devicePixelRatio || 1
  canvas.width = canvasWidth.value * dpr
  canvas.height = canvasHeight.value * dpr
  canvas.style.width = canvasWidth.value + 'px'
  canvas.style.height = canvasHeight.value + 'px'

  if (ctx) {
    ctx.scale(dpr, dpr)
  }
}

const drawWave = (layer, time) => {
  if (!ctx) return

  const { amplitude, frequency, speed, color, offset } = layer
  const width = canvasWidth.value
  const height = canvasHeight.value

  ctx.fillStyle = color
  ctx.beginPath()

  // Start from bottom left
  ctx.moveTo(0, height)

  // Create flowing wave path
  for (let x = 0; x <= width; x += 2) {
    const y1 = Math.sin(x * frequency + time * speed + offset) * amplitude
    const y2 = Math.cos(x * frequency * 0.7 + time * speed * 1.2 + offset) * amplitude * 0.6
    const y3 = Math.sin(x * frequency * 1.3 + time * speed * 0.8 + offset) * amplitude * 0.4

    const finalY = height * 0.6 + y1 + y2 + y3

    if (x === 0) {
      ctx.lineTo(x, finalY)
    } else {
      ctx.lineTo(x, finalY)
    }
  }

  // Close the path to bottom right and back
  ctx.lineTo(width, height)
  ctx.lineTo(0, height)
  ctx.closePath()
  ctx.fill()
}

const animate = () => {
  if (!ctx) return

  // Clear canvas
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)

  // Draw background gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight.value)
  gradient.addColorStop(0, 'rgba(240, 120, 100, 0.3)')
  gradient.addColorStop(0.3, 'rgba(220, 100, 80, 0.4)')
  gradient.addColorStop(0.6, 'rgba(200, 80, 60, 0.5)')
  gradient.addColorStop(1, 'rgba(180, 60, 40, 0.6)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)

  // Draw wave layers from back to front
  waveConfig.layers.forEach(layer => {
    drawWave(layer, time)
  })

  time += 0.016 // ~60fps
  animationId = requestAnimationFrame(animate)
}

const startAnimation = () => {
  if (!waveCanvas.value) return

  ctx = waveCanvas.value.getContext('2d')
  if (!ctx) return

  resizeCanvas()
  animate()
}

const stopAnimation = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

onMounted(() => {
  nextTick(() => {
    startAnimation()

    // Handle resize
    window.addEventListener('resize', resizeCanvas)
  })
})

onUnmounted(() => {
  stopAnimation()
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
.wave-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wave-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wave-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(240, 120, 100, 0.1) 0%,
    rgba(220, 100, 80, 0.2) 25%,
    rgba(200, 80, 60, 0.3) 50%,
    rgba(180, 60, 40, 0.4) 75%,
    rgba(160, 40, 30, 0.5) 100%
  );
  pointer-events: none;
}
</style>
