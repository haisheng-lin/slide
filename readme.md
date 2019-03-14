### 渣渣成长之路之 - 图片幻灯片组件

示例：
```
<script>
  const images = [
    'http://ww2.sinaimg.cn/mw690/79c57e13jw1ehshhd53k1j20r80a0q40.jpg',
    'http://ww1.sinaimg.cn/mw690/79c57e13jw1ehshhcrtv5j20r80a00v6.jpg',
    'http://ww4.sinaimg.cn/mw690/79c57e13jw1ehshhcdxwyj20r80a0go7.jpg',
  ];
  const sliderEle = document.querySelector('#image-slider');
  new Slide({
    target: sliderEle,
    items: images,
    mode: 'random',
  });
</script>
```

参数：
- target: `HTMLElement`, 挂载幻灯片组件的元素
- items: `string[]`, 图片 url 数组
- mode: `string`, 可选 `sequence`（顺序播放） 或 `random`（随机播放），默认为**顺序播放**

完整示例可查看 `index.html`
