export class FogParticle {
  ctx
  canvasWidth
  canvasHeight
  x
  y
  xVelocity
  yVelocity
  image

  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.x = 0
    this.y = 0
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  setVelocity(x, y) {
    this.xVelocity = x
    this.yVelocity = y
  }

  setImage(image) {
    this.image = image
  }

  render() {
    if (!this.image) return

    this.ctx.drawImage(
      this.image,
      this.x - this.image.width / 2,
      this.y - this.image.height / 2,
      400,
      400
    )

    this.x += this.xVelocity
    this.y += this.yVelocity

    // Check if has crossed the right edge
    if (this.x >= this.canvasWidth) {
      this.xVelocity = -this.xVelocity
      this.x = this.canvasWidth
    }
    // Check if has crossed the left edge
    else if (this.x <= 0) {
      this.xVelocity = -this.xVelocity
      this.x = 0
    }

    // Check if has crossed the bottom edge
    if (this.y >= this.canvasHeight) {
      this.yVelocity = -this.yVelocity
      this.y = this.canvasHeight
    }
    // Check if has crossed the top edge
    else if (this.y <= 0) {
      this.yVelocity = -this.yVelocity
      this.y = 0
    }
  }
}
