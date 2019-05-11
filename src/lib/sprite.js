import { loadImage } from '@/utils';

export default class Sprite {
  static async create(framesMeta, options) {
    const instance = new this(framesMeta, options);
    await instance.loadFrames();
    return instance;
  }

  #options = null;
  #framesOrder = [];
  #framesUrls = [];
  #framesSkipRate = 0;
  #frames = [];
  #currentFrameOrderIndex = -1;
  #framesSkipLeft = 0;

  get frame() {
    if (this.#frames === 0) return null;
    if (this.#frames === 1) return this.#frames[0];
    if (--this.#framesSkipLeft < 0) {
      this.#framesSkipLeft = this.#framesSkipRate;
      this.#currentFrameOrderIndex++;
      if (this.#options.onChangeFrame instanceof Function) {
        this.#options.onChangeFrame(this.#currentFrameOrderIndex, this.#framesOrder.length);
      }
      if (this.#currentFrameOrderIndex >= this.#framesOrder.length) this.#currentFrameOrderIndex = 0;
    }
    return this.#frames[this.#framesOrder[this.#currentFrameOrderIndex]];
  }

  get size() {
    const index = this.#currentFrameOrderIndex > -1 ? this.#currentFrameOrderIndex : 0;
    return {
      width: this.#frames[this.#framesOrder[index]].width,
      height: this.#frames[this.#framesOrder[index]].height,
    };
  }

  constructor(framesMeta, options) {
    this.#options = options;
    this.#framesOrder = framesMeta.framesOrder;
    this.#framesUrls = framesMeta.frames;

    if (this.#framesOrder.length < this.#options.frameRate) {
      this.#framesSkipRate = Math.trunc(
        this.#options.frameRate / (this.#framesOrder.length * this.#options.animationSpeed),
      );
    }
  }

  async loadFrames() {
    this.#frames = await Promise.all(Array.from(this.#framesUrls, loadImage));
  }
}
