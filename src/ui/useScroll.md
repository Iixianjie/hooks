---
title: useScroll
---

# useScroll

获取、设置滚动条位置，支持滚动到点、滚动到元素、增值滚动

## 示例

<code src="./useScroll.demo.tsx" />

## API

```tsx | pure
const { get, set, scrollToElement, ref } =
      useScroll<HTMLDivElement>(option?: UseScrollOptions);

return (
	<div ref={ref}>...</div>
)
```

**get** - 获取滚动位置信息

```ts
function get(): UseScrollMeta;

interface UseScrollMeta {
  /** 滚动元素 */
  el: HTMLElement;
  /** x轴位置 */
  x: number;
  /** y轴位置 */
  y: number;
  /** 可接受的x轴滚动最大值 */
  xMax: number;
  /** 可接受的y轴滚动最大值 */
  yMax: number;
  /** 元素高度 */
  height: number;
  /** 元素宽度 */
  width: number;
  /** 元素总高度 */
  scrollHeight: number;
  /** 元素总宽度 */
  scrollWidth: number;
  /** 滚动条位于最底部 */
  touchBottom: boolean;
  /** 滚动条位于最右侧 */
  touchRight: boolean;
  /** 滚动条位于最顶部 */
  touchTop: boolean;
  /** 滚动条位于最左侧 */
  touchLeft: boolean;
}
```

**set** - 设置滚动条位置

```ts
function set(options: UseScrollSetArg);

interface UseScrollSetArg {
  /** 指定滚动的x轴 */
  x?: number;
  /** 指定滚动的y轴 */
  y?: number;
  /** 以当前滚动位置为基础进行增减滚动 */
  raise?: boolean;
  /** 为true时阻止动画 */
  immediate?: boolean;
}
```

**scrollToElement** - 滚动到指定元素

```ts
// selector - 滚动到以该选择器命中的第一个元素
function scrollToElement(selector: string): void;
// element - 滚动到指定元素
function scrollToElement(element: HTMLElement): void;
```

**ref** - 默认使用`document.documentElement`作为滚动元素，可以通过这个属性自行指定滚动元素

```tsx | pure
const { set, ref } = useScroll<HTMLDivElement>();

return <div ref={ref}>...</div>;
```

**option** - 其他选项

```ts
useScroll(option?: UseScrollOptions)

interface UseScrollOptions {
  /** 直接以指定dom作为滚动元素，优先级高于default，低于ref */
  el?: HTMLElement;
  /** 滚动时触发 */
  onScroll?(meta: UseScrollMeta): void;
  /** 100 | 配置了onScroll时，设置throttle时间, 单位(ms) */
  throttleTime?: number;
  /** 0 | 滚动偏移值, 使用scrollToElement时，会根据此值进行修正 */
  offset?: number;
  /** y轴的偏移距离，优先级高于offset */
  offsetX?: number;
  /** x轴的偏移距离，优先级高于offset */
  offsetY?: number;
  /** 0 | touch系列属性的触发修正值 */
  touchOffset?: number;
}
```