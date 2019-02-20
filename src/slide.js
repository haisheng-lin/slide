/**
 * 从指定的最小数与最大数之间随机选取一个数
 *
 * @param {number} minIndex
 * @param {number} maxIndex
 * @returns {any}
 */
function getRandomNumber (minIndex, maxIndex) {
  return minIndex + Math.floor(Math.random() * (maxIndex - minIndex + 1));
}

const Slide = (function () {

  class Slide {
    /**
     * @param {{ target: HTMLElement, items: string[], mode: string }} options
     * @constructor
     */
    constructor (options) {
      this.options = options;
      this.init();
    }
    /**
     * 初始化 dom 以及绑定事件等
     *
     * @returns {void}
     */
    init () {
      const { items, target } = this.options;
      const fragmentElem = document.createDocumentFragment();

      // 增加 ul 节点
      const slideElem = document.createElement('ul');
      slideElem.classList.add('slide');
      fragmentElem.appendChild(slideElem);

      // ul 增加 li 节点
      const slidePreviousElem = document.createElement('li');
      slidePreviousElem.classList.add('slide-previous');
      const previousSpanElem = document.createElement('span');
      previousSpanElem.innerText = '<';
      slidePreviousElem.appendChild(previousSpanElem);
      slideElem.appendChild(slidePreviousElem);
      slidePreviousElem.addEventListener('click', this.previous.bind(this));

      const slideItemElem = document.createElement('li');
      slideItemElem.classList.add('slide-item');
      slideElem.appendChild(slideItemElem);

      const slideNextElem = document.createElement('li');
      slideNextElem.classList.add('slide-next');
      const nextSpanElem = document.createElement('span');
      nextSpanElem.innerText = '>';
      slideNextElem.appendChild(nextSpanElem);
      slideElem.appendChild(slideNextElem);
      slideNextElem.addEventListener('click', this.next.bind(this));

      // li 增加 img 节点
      this._currentIndex = 0;
      const imgItemElem = document.createElement('img');
      imgItemElem.src = items[this._currentIndex] || '';
      this._imgItemElem = imgItemElem; // 暂存起 img 节点
      slideItemElem.appendChild(imgItemElem);
      
      target.appendChild(fragmentElem);
    }
    /**
     * 点击向前
     *
     * @returns {void}
     */
    previous () {
      const { mode, items } = this.options;
      switch (mode) {
        case 'sequence': // 顺序播放
          this._currentIndex = (items.length + this._currentIndex - 1) % items.length;
          break;
        case 'random': // 随机播放
          this._currentIndex = getRandomNumber(0, items.length - 1);
          break;
        default: // 默认是顺序播放模式
        this._currentIndex = (items.length + this._currentIndex - 1) % items.length;
          break;
      }
      this._updateImage();
    }
    /**
     * 点击向后
     *
     * @returns {void}
     */
    next () {
      const { mode, items } = this.options;
      switch (mode) {
        case 'sequence': // 顺序播放
          this._currentIndex = (items.length + this._currentIndex + 1) % items.length;
          break;
        case 'random': // 随机播放
          this._currentIndex = getRandomNumber(0, items.length - 1);
          break;
        default: // 默认是顺序播放模式
          this._currentIndex = (items.length + this._currentIndex + 1) % items.length;
          break;
      }
      this._updateImage();
    }
    /**
     * 更改播放的当前图片
     *
     * @returns {void}
     */
    _updateImage () {
      const { items } = this.options;
      this._imgItemElem.src = items[this._currentIndex];
    }
  }

  return Slide;
})();

window.Slide = Slide;
