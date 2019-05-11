export default class RenderModel {
  static async create(...args) {
    const instance = new this(...args);
    await instance.load();
    return instance;
  }

  #renderer = null;
}
