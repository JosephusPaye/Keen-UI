tether-drop and tether-tooltip and draggabilly not support SSR

so some customization has been done to them

using

```js
typeof window !== 'undefined'
```

to detect the env is browser or node.js.
