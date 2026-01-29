<template>
  <div class="background-wrapper">
    <div class="background-glow"></div>
    <div class="background-overlay"></div>
    <canvas ref="particlesCanvas" class="particles-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particlesCanvas = ref(null)
let animationId = null

onMounted(() => {
  const canvas = particlesCanvas.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = []
  const particleCount = 60

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 0.5
      this.speedX = Math.random() * 0.5 - 0.25
      this.speedY = Math.random() * 0.5 - 0.25
      this.opacity = Math.random() * 0.4 + 0.1
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      if (this.x > canvas.width) this.x = 0
      if (this.x < 0) this.x = canvas.width
      if (this.y > canvas.height) this.y = 0
      if (this.y < 0) this.y = canvas.height
    }

    draw() {
      ctx.fillStyle = `rgba(242, 242, 242, ${this.opacity})`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(particle => {
      particle.update()
      particle.draw()
    })

    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const dx = a.x - b.x
        const dy = a.y - b.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          ctx.strokeStyle = `rgba(242, 242, 242, ${0.08 * (1 - distance / 120)})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      })
    })

    animationId = requestAnimationFrame(animate)
  }

  animate()

  const handleResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (animationId) cancelAnimationFrame(animationId)
  })
})
</script>

<style scoped>
.background-wrapper {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.background-glow {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background-color: hsla(0, 0%, 20%, 0.15);
  border-radius: 50%;
  filter: blur(120px);
  animation: pulse-slow 4s ease-in-out infinite;
}

.background-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    hsla(0, 0%, 4%, 0.3) 50%,
    hsla(0, 0%, 4%, 0.8) 100%
  );
}

.particles-canvas {
  position: absolute;
  inset: 0;
}
</style>
