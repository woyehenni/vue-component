---
title: VHello
---

# 介绍

折叠

## 引入

单页面引入

```
import { VHelo } from 'vue-component';

```

全局引入

```
import { createApp } from 'vue';
import { VHelo } from 'vue-component';

const app = createApp();
app.use(VHelo);
```

# 代码演示

## 基础用法

:::preview 使用 `name` 来传参。

demo-preview=../../examples/hello/basic.vue

:::

## 属性

| 参数 | 描述 | 类型   | 可接受的值 | 默认值 |
| ---- | ---- | ------ | ---------- | ------ |
| name | name | string |            | —      |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
