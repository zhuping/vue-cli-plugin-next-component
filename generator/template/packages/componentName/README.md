# <%=camelName %> <%=componentCnName %>

### 引入

```js
import { <%=camelName %> } from '@vivo/next-ui';

Vue.component(<%=camelName %>.name, <%=camelName %>);
```

<template>
  <preview router="<%=componentName %>"></preview>
</template>

### API

#### <%=camelName %> Props

| 属性 | 说明 | 类型 | 默认值 | 备注 |
| :-- | :-- | :-- | :-- | :-- |
| name | 图标名称 | String | - | - |
