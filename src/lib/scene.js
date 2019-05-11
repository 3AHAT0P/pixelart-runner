import debounce from 'lodash/debounce';

import Canvas from '@/lib/canvas';
import { Runner, Landscape } from '@/lib/render-models';

export default class Scene {
  #element = null;
  #width = 320;
  #height = 256;
  #canvas = new Canvas(this.#width, this.#height, { defaultColor: 'hsl(196, 100%, 47%)' }); // 560

  #runner = null;
  #background = null;
  #frameRate = 60;

  constructor(element) {
    this.#element = element;
    this.#canvas.fill('hsl(196, 100%, 47%)');
    this.#element.appendChild(this.#canvas.element);

    this.tick = this.tick.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    this.updateDirectionShiftBackground = this.updateDirectionShiftBackground.bind(this);
    this.run();

    this.actionHandler = debounce(this.actionHandler.bind(this), 64);
    // this.actionHandler = this.actionHandler.bind(this);
    window.addEventListener('keydown', this.actionHandler, { passive: true });
    window.addEventListener('keyup', this.actionHandler, { passive: true });
  }

  async run() {
    await this.loadAssets();
    this.tick();
  }

  checkPosition(x, y, width, height) {
    if (x <= 0) return false;
    if (x + width >= this.#width) return false;
    if (y <= 0) return false;
    if (y + height >= this.#height) return false;

    return true;
  }

  updateDirectionShiftBackground(direction = 'STOP') {
    if (this.#background == null) return;
    if (direction === 'LEFT') this.#background.shiftDirection = 'RIGHT';
    if (direction === 'RIGHT') this.#background.shiftDirection = 'LEFT';
    if (direction === 'STOP') this.#background.shiftDirection = 'STOP';
  }

  async loadAssets() {
    this.#runner = await Runner.create({
      width: 64,
      height: 64,
      x: 0,
      y: 160,
      frameRate: this.#frameRate,
      animationSpeed: 2,
      checkPosition: this.checkPosition,
      onMove: this.updateDirectionShiftBackground,
      onStop: this.updateDirectionShiftBackground,
    });
    this.#background = await Landscape.create({
      width: this.#width,
      height: this.#height,
      frameRate: this.#frameRate,
    });
  }

  tick() {
    // setTimeout(this.tick, 1000);
    requestAnimationFrame(this.tick);
    this.#canvas.clear();
    this.#canvas.renderImage(this.#background.render());
    this.#canvas.renderImage(this.#runner.render(), this.#runner.position);
  }

  stop() {
    this.#runner.stop();
  }

  actionHandler(event) {
    if (this.#runner == null || this.#background == null) return;
    if (event.type === 'keyup' && (event.code === 'ArrowRight' || event.code === 'ArrowLeft')) {
      this.stop();
      return;
    }
    if (event.code === 'ArrowRight') {
      this.#runner.run('RIGHT');
    }
    if (event.code === 'ArrowLeft') {
      this.#runner.run('LEFT');
    }
    if (event.code === 'Space') {
      this.#runner.jump();
    }
  }
}
