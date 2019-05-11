import Sprite from '../sprite';

import RenderModel from './render-model';

export default class Runner extends RenderModel {
  #x = 0;
  #y = 0;
  #width = 256;
  #height = 256;
  #prevActionType = 'STOP';
  #actionType = 'STOP';
  #direction = 'RIGHT';

  #offCanvas = null;
  #renderer = null;
  #options = null;
  #runingSprite = null;
  #runingSpriteMeta = {
    framesOrder: [0, 1, 0, 2],
    frames: [
      '/img/runner/runner-run-left-0.png',
      '/img/runner/runner-run-left-1.png',
      '/img/runner/runner-run-left-2.png',
    ],
  };

  #standingSprite = null;
  #standingSpriteMeta = {
    framesOrder: [0, 0, 0, 1],
    frames: [
      '/img/runner/runner-standing-left.png',
      '/img/runner/runner-standing-left-closed-eyes.png',
    ],
  };

  #jumpingSprite = null;
  #jumpingSpriteMeta = {
    framesOrder: [0, 1, 1, 1, 1, 1, 1, 1, 0],
    frames: [
      '/img/runner/runner-standing-left.png',
      '/img/runner/runner-jumping-left.png',
    ],
  };

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  get actionType() {
    return this.#actionType;
  }

  set actionType(actionName) {
    if (this.#actionType === actionName) return;
    if (this.#prevActionType !== this.#actionType) this.#prevActionType = this.#actionType;
    if (actionName === 'STOP') {
      if (this.#options.onStop instanceof Function) this.#options.onStop();
    }
    this.#actionType = actionName;
  }

  constructor(options) {
    super(options);
    this.#width = options.width;
    this.#height = options.height;
    this.#x = options.x;
    this.#y = options.y;
    this.#options = options;
    this.#offCanvas = new OffscreenCanvas(this.#width, this.#height);
    this.#renderer = this.#offCanvas.getContext('2d');
    this.#renderer.imageSmoothingEnabled = false;
  }

  async load() {
    this.#runingSprite = await Sprite.create(this.#runingSpriteMeta, {
      frameRate: this.#options.frameRate,
      animationSpeed: 2,
    });
    this.#standingSprite = await Sprite.create(this.#standingSpriteMeta, {
      frameRate: this.#options.frameRate,
      animationSpeed: .5,
    });
    this.#jumpingSprite = await Sprite.create(this.#jumpingSpriteMeta, {
      frameRate: this.#options.frameRate,
      animationSpeed: 1,
      onChangeFrame: (frameNumber, frameCount) => {
        if (frameNumber > 0 && frameNumber < 4) this.#y -= 8;
        if (frameNumber > 4 && frameNumber < 8) this.#y += 8;
        if (frameNumber === frameCount) {
          this.actionType = this.#prevActionType;
        }
      },
    });
  }

  stop() {
    if (this.actionType === 'JUMP') {
      this.#prevActionType = 'STOP';
    } else {
      this.actionType = 'STOP';
    }
  }

  run(direction = 'RIGHT') {
    if (this.actionType === 'JUMP') {
      this.#prevActionType = 'RUN';
    } else {
      this.actionType = 'RUN';
    }
    if (this.#direction === direction) return;
    this.#direction = direction;
  }

  jump() {
    if (this.actionType === 'JUMP') return;
    this.actionType = 'JUMP';
  }

  move(dx = 0, dy = 0) {
    if (this.#options.checkPosition(this.position.x + dx, this.position.y + dy, this.#width, this.#height)) {
      this.#x += dx;
      this.#y += dy;
    }
    if (this.#options.onMove instanceof Function) this.#options.onMove(this.#direction);
  }

  renderSprite(sprite) {
    const isMirror = this.#direction === 'RIGHT';
    this.#renderer.clearRect(0, 0, this.#width, this.#height);
    if (isMirror) this.#renderer.scale(-1, 1);
    this.#renderer.drawImage(
      sprite.frame,
      0,
      0,
      sprite.size.width,
      sprite.size.height,
      0,
      0,
      this.#width * (isMirror ? -1 : 1),
      this.#height,
    );
    if (isMirror) this.#renderer.setTransform(1, 0, 0, 1, 0, 0);
  }

  render() {
    if (this.#actionType === 'RUN') {
      if (this.#direction === 'RIGHT') {
        this.move(1);
        this.renderSprite(this.#runingSprite);
      }
      if (this.#direction === 'LEFT') {
        this.move(-1);
        this.renderSprite(this.#runingSprite);
      }
    } else if (this.#actionType === 'STOP') {
      this.renderSprite(this.#standingSprite);
    } else if (this.#actionType === 'JUMP') {
      if (this.#prevActionType === 'RUN') {
        if (this.#direction === 'RIGHT') this.move(1);
        if (this.#direction === 'LEFT') this.move(-1);
      }
      this.renderSprite(this.#jumpingSprite);
    }
    return this.#offCanvas;
  }
}
