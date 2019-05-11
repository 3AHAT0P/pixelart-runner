export default class Canvas {
  #element = document.createElement('canvas');
  #ctx = null;

  #width = 64;
  #height = 64;
  #options = null;

  get element() {
    return this.#element;
  }

  constructor(width, height, options) {
    this.#element.width = this.#width = width;
    this.#element.height = this.#height = height;
    this.#element.style['object-fit'] = 'contain';
    this.#element.style.width = '100%';
    this.#element.style.height = '100%';
    this.#element.style['image-rendering'] = 'pixelated';
    this.#options = options;
    this.#ctx = this.#element.getContext('2d');
    this.#ctx.imageSmoothingEnabled = false;
  }

  clear() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    this.fill(this.#options.defaultColor);
  }

  fill(color) {
    this.#ctx.save();
    this.#ctx.fillStyle = color;
    this.#ctx.fillRect(0, 0, this.#width, this.#height);
    this.#ctx.restore();
  }

  renderImage(image, position = { x: 0, y: 0 }, scale = 1) {
    this.#ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      position.x,
      position.y,
      image.width / scale,
      image.height / scale,
    );
  }
}
