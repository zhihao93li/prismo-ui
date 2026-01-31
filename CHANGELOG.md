# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2026-01-30

### Fixed
- CSS 样式导出路径配置，支持多种导入方式
- 修复 vite.config.ts 中 CSS 文件名配置
- 完善 package.json 的 exports 配置，添加 `./dist/*` 通配符支持

### Added
- 导出完整的 Hooks: `useMatchBreakpoint`, `usePointerType`
- 添加 CSS 模块类型声明文件
- 更新 README 文档，添加使用技巧和常见问题

### Changed
- 包名从 `@prismo/ui` 更改为 `tafu-ui-design`
- 统一文件命名为 `tafu-ui-design.*`
- 优化 package.json 的 sideEffects 配置

## [0.1.0] - 2026-01-30

### Added
- 初始版本发布
- 基础组件：Button, Card, Tag, Modal, Toast
- 表单组件：FormInput, FormSelect, Checkbox, ButtonGroup, BirthInfoForm
- 反馈组件：Loading (Spinner & Overlay)
- 装饰组件：GradientBackground
- 完整的 CSS 变量系统
- 响应式设计支持 (375px/768px/1024px)
- TypeScript 类型定义
- Hooks: useBreakpoint, useTouchDevice

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-30

### Added
- Initial release of Prismo UI
- Button component with 5 variants
- Card component with 4 variants
- Modal component with responsive design
- Toast notification system
- Form components (Input, Select, Checkbox, ButtonGroup)
- Loading components (Spinner, Overlay)
- Tag component
- GradientBackground component
- Full TypeScript support
- Responsive design system (Mobile/Tablet/Desktop)
- Storybook documentation
