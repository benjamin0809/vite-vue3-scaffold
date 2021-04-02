
### 1. 初始化项目

```bash
// 1
mkdir vite-vue-scaffold

// 2
cd vite-vue-scaffold

// 3
npm init -y

yarn create vite-app
```

### 2. 简单设置vite.config.ts

```ts
const viteConfig: UserConfig = {
    alias: {
        "/@/": resolve("src"),
        "/@components/": resolve("./src/components")
    }
}
```

### 3. 安装typescript

```bash

yarn add -D typescript

```

配置tsconfig.json

```json

{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "preserve",
    "lib": ["DOM", "ESNext", "DOM.Iterable", "ScriptHost"],
    "module": "ESNext",
    "moduleResolution": "node",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "paths": {
      "/@/*": [
        "src/*"
      ],
      "/@components/*": [
        "src/components/*"
      ]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "dist"]
}

```

### 4. 添加router vuex

```bash

yarn add vue-router@next vuex@next

```

### 5. 安装eslint + prettier 代码规范配置及格式化

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin vue-eslint-parser

```

### 6. stylelint

```bash
# stylelint是运行工具，stylelint-config-standard是stylelint的推荐配置，
# stylelint-order是CSS属性排序插件(先写定位，再写盒模型，再写内容区样式，最后写 CSS3 相关属
yarn add -D stylelint stylelint-config-standard stylelint-order
```

### 7. 使用mock

```bash
yarn add -D vite-plugin-mock mockjs
```


### 单元测试 vue test utils

这里参考 [VTU官方](https://vue-test-utils.vuejs.org/v2/) 的配置

```bash
yarn add -D jest @vue/test-utils@next vue-jest@next ts-jest
```

### 引入样式预处理器

这里以sass为例， vite已经支持引入样式预处理。只安装相应的预处理器就可以使用

```bash
yarn add -D sass
```