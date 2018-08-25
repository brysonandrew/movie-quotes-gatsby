import { FogParticle } from './particle'

export class Main {
  ctx
  canvasWidth
  canvasHeight
  x
  y
  particleCount
  maxVelocity
  particle
  particles
  image

  constructor({
    selector = null,
    density = 50,
    velocity = 0.5,
    particle = null,
  } = {}) {
    const canvas = document.querySelector(selector)
    const bcr = canvas.parentElement.getBoundingClientRect()
    this.ctx = canvas.getContext('2d')
    this.canvasWidth = canvas.width = bcr.width
    this.canvasHeight = canvas.height = bcr.height

    this.particleCount = density
    this.maxVelocity = velocity
    this.particle = particle

    this._createParticles()
    this._setImage()
    this._render()
  }

  _createParticles() {
    this.particles = []

    const random = (min, max) => Math.random() * (max - min) + min

    for (let i = 0; i < this.particleCount; i++) {
      const particle = new FogParticle(
        this.ctx,
        this.canvasWidth,
        this.canvasHeight
      )

      particle.setPosition(
        random(0, this.canvasWidth),
        random(0, this.canvasHeight)
      )
      particle.setVelocity(
        random(-this.maxVelocity, this.maxVelocity),
        random(-this.maxVelocity, this.maxVelocity)
      )

      this.particles.push(particle)
    }
  }

  _setImage() {
    if (!this.particle) return

    const img = new Image()
    img.onload = () => this.particles.forEach(p => p.setImage(img))
    img.src = this.particle
  }

  _render() {
    this.ctx.beginPath()

    // this.ctx.fillStyle = "rgba(0, 0, 0, 0)"
    // this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

    this.particles.forEach(p => p.render())

    requestAnimationFrame(() => this._render())

    this.ctx.closePath()
  }
}
