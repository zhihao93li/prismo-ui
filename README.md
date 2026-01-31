# tafu-ui-design

现代化的 React 组件库，包含 Tafu Design System 的所有基础 UI 组件。

## ✨ 特性

- 🎨 **完整的设计系统** - 包含颜色、间距、圆角、阴影规范
- 📱 **全面响应式** - Mobile-first 设计，支持 375px/768px/1024px 三断点
- 💪 **TypeScript** - 完整的类型定义和类型导出
- 📖 **Storybook** - 交互式组件文档
- 🎭 **动画支持** - 基于 Framer Motion
- 🌳 **Tree-shaking** - 支持按需加载
- 📦 **双格式输出** - ESM 和 CJS 双格式

## 📦 安装

```bash
npm install tafu-ui-design
# or
yarn add tafu-ui-design
# or
pnpm add tafu-ui-design
```

### Peer Dependencies

```bash
npm install react react-dom framer-motion @phosphor-icons/react
```

## 🚀 快速开始

```tsx
import { Button, Card, ToastProvider, useToast } from 'tafu-ui-design'
import 'tafu-ui-design/styles'

function App() {
  const toast = useToast()
  
  return (
    <ToastProvider>
      <Card>
        <Button onClick={() => toast.success('Hello!')}>
          Click Me
        </Button>
      </Card>
    </ToastProvider>
  )
}
```

## 📚 组件列表

### 基础组件
- **Button** - 按钮组件，支持多种变体和尺寸
- **Card** - 卡片容器，支持不同 padding 和变体
- **Tag** - 标签组件，9 种颜色主题

### 反馈组件
- **Modal** - 模态框，支持响应式（移动端底部弹出）
- **Toast** - 通知提示，支持 4 种类型（success/error/warning/info）
- **Loading** - 加载指示器（Spinner + Overlay）

### 表单组件
- **FormInput** - 输入框，支持错误提示
- **FormSelect** - 下拉选择器
- **Checkbox** - 复选框
- **ButtonGroup** - 按钮组（带滑动指示器）

### 装饰组件
- **GradientBackground** - 渐变背景（栅格 + 光效）

## 🎨 响应式设计

所有组件都采用 **Mobile-first** 设计策略：

```css
/* Mobile (375px+) - 默认 */
font-size: 15px;
padding: 12px 16px;

/* Tablet (768px+) */
@media (min-width: 768px) {
  font-size: 16px;
  padding: 14px 20px;
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  font-size: 17px;
  padding: 16px 24px;
}
```

## 🪝 Hooks

```tsx
import { 
  useBreakpoint, 
  useMatchBreakpoint, 
  useTouchDevice, 
  usePointerType 
} from 'tafu-ui-design'

function Component() {
  // 获取当前断点
  const breakpoint = useBreakpoint() // 'mobile' | 'tablet' | 'desktop'
  
  // 匹配特定断点
  const isMobile = useMatchBreakpoint('mobile')
  const isTabletOrAbove = useMatchBreakpoint(['tablet', 'desktop'])
  
  // 检测设备类型
  const isTouchDevice = useTouchDevice() // boolean
  const pointerType = usePointerType() // 'fine' | 'coarse' | 'none'
  
  return <div>Current: {breakpoint}</div>
}
```

## 📐 CSS 变量

组件库提供了完整的 CSS 变量系统，你可以在项目中直接使用：

```css
/* 颜色 */
--absolute-white
--light-85, --light-90, --light-94, --light-95, --light-96
--dark-7, --dark-12
--grey-24, --grey-30, --grey-50

/* 主题色 */
--accent-red, --accent-orange, --accent-purple
--accent-pink, --accent-green, --accent-blue, --accent-yellow

/* 语义色 */
--color-primary, --color-accent, --color-success
--color-error, --color-warning, --color-info

/* 间距 (响应式) */
--spacing-xs, --spacing-sm, --spacing-md
--spacing-lg, --spacing-xl, --spacing-2xl

/* 圆角 */
--radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-full

/* 阴影 */
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl
```

## 📖 文档

查看完整文档和交互式示例：[Storybook](https://your-storybook-url.com)

## 💡 使用技巧

### 按需导入

组件库支持 Tree-shaking，只会打包你使用的组件：

```tsx
// ✅ 推荐：只导入需要的组件
import { Button, Card } from 'tafu-ui-design'

// ❌ 避免：导入整个库
import * as TafuUI from 'tafu-ui-design'
```

### 样式导入

**必须在应用入口导入样式文件：**

```tsx
// main.tsx / index.tsx / App.tsx
import 'tafu-ui-design/styles'
```

支持的导入方式：
```tsx
import 'tafu-ui-design/styles'         // ✅ 推荐
import 'tafu-ui-design/styles.css'     // ✅ 也可以
import 'tafu-ui-design/dist/tafu-ui-design.css' // ✅ 完整路径
```

### TypeScript 支持

完整的类型定义已内置，无需额外安装 `@types` 包：

```tsx
import type { ButtonProps, CardProps } from 'tafu-ui-design'

const customProps: ButtonProps = {
  variant: 'primary',
  size: 'large'
}
```

## ❓ 常见问题

<details>
<summary><strong>Q: 样式没有生效？</strong></summary>

确保在应用入口导入了样式文件：
```tsx
import 'tafu-ui-design/styles'
```
</details>

<details>
<summary><strong>Q: 如何自定义主题色？</strong></summary>

覆盖 CSS 变量即可：
```css
:root {
  --color-primary: #your-color;
  --accent-purple: #your-purple;
}
```
</details>

<details>
<summary><strong>Q: 支持哪些浏览器？</strong></summary>

- Chrome/Edge: 最近两个版本
- Firefox: 最近两个版本
- Safari: 最近两个版本
- iOS Safari: 12.0+
- Android Chrome: 最近两个版本
</details>

<details>
<summary><strong>Q: 可以和 Next.js/Remix 一起使用吗？</strong></summary>

完全支持！这是一个标准的 React 组件库，兼容所有 React 框架。对于 Next.js App Router，确保在客户端组件中使用需要交互的组件（添加 `'use client'`）。
</details>

## 🤝 贡献

欢迎贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT © [Your Name]
