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
import { useBreakpoint, useTouchDevice } from 'tafu-ui-design'

function Component() {
  const breakpoint = useBreakpoint() // 'mobile' | 'tablet' | 'desktop'
  const isTouchDevice = useTouchDevice() // boolean
  
  return <div>Current: {breakpoint}</div>
}
```

## 📖 文档

查看完整文档和交互式示例：[Storybook](https://your-storybook-url.com)

## 🤝 贡献

欢迎贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT © [Your Name]
