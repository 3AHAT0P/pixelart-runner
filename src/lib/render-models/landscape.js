import Sprite from '../sprite';

import RenderModel from './render-model';

const DIRECTION = ['LEFT', 'STOP', 'RIGHT'];

export default class Landscape extends RenderModel {
  #offset = 0;
  #offsetModificator = 0;
  #offCanvas = null;
  #renderer = null;
  #width = 0;
  #height = 0;
  #options = null;
  #sprite = null;
  #spriteMeta = {
    framesOrder: [0],
    frames: [
      'https://lh3.google.com/u/0/d/1ldJ5Z5rstgaRncGB2tMmje9oQeDJYHUs=w2072-h1576-iv1',
    ],
  };

  get shiftDirection() {
    return DIRECTION[this.#offsetModificator + 1];
  }

  set shiftDirection(direction) {
    this.#offsetModificator = DIRECTION.indexOf(direction) - 1;
  }

  constructor(options) {
    super(options);
    this.#width = options.width;
    this.#height = options.height;
    this.#options = options;
    this.#offCanvas = new OffscreenCanvas(this.#width * 2, this.#height);
    this.#renderer = this.#offCanvas.getContext('2d');
    this.#renderer.imageSmoothingEnabled = false;
  }

  async load() {
    this.#sprite = await Sprite.create(this.#spriteMeta, {
      frameRate: this.#options.frameRate,
    });
  }

  render() {
    this.#renderer.clearRect(0, 0, this.#width, this.#height);
    this.#offset += this.#offsetModificator;
    const halfWidth = this.#width / 2;
    if (this.#offset < -halfWidth) this.#offset = halfWidth;
    if (this.#offset > halfWidth) this.#offset = -halfWidth;
    this.#renderer.drawImage(
      this.#sprite.frame,
      halfWidth, 0, halfWidth, this.#height,
      -halfWidth + this.#offset, 0, halfWidth, this.#height,
    );
    this.#renderer.drawImage(
      this.#sprite.frame,
      0, 0, this.#width, this.#height,
      this.#offset, 0, this.#width, this.#height,
    );
    this.#renderer.drawImage(
      this.#sprite.frame,
      0, 0, halfWidth, this.#height,
      this.#width + this.#offset, 0, halfWidth, this.#height,
    );
    return this.#offCanvas;
  }
}
