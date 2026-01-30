import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'light', 'red', 'purple', 'green', 'orange', 'pink', 'yellow', 'blue'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

// 默认状态
export const Default: Story = {
  args: {
    children: 'Default Tag',
    color: 'default',
    size: 'medium',
  },
}

// 所有颜色变体
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '20px' }}>
      <Tag color="default">Default</Tag>
      <Tag color="light">Light</Tag>
      <Tag color="red">Red</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="orange">Orange</Tag>
      <Tag color="pink">Pink</Tag>
      <Tag color="yellow">Yellow</Tag>
      <Tag color="blue">Blue</Tag>
    </div>
  ),
}

// 所有尺寸
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Tag size="small" color="purple">Small Tag</Tag>
        <Tag size="medium" color="purple">Medium Tag</Tag>
        <Tag size="large" color="purple">Large Tag</Tag>
      </div>
    </div>
  ),
}

// 移动端视图 (375px)
export const MobileView: Story = {
  args: {
    children: 'Mobile Tag',
    color: 'green',
    size: 'medium',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

// Tablet 视图 (768px)
export const TabletView: Story = {
  args: {
    children: 'Tablet Tag',
    color: 'blue',
    size: 'medium',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

// Desktop 视图 (1024px+)
export const DesktopView: Story = {
  args: {
    children: 'Desktop Tag',
    color: 'orange',
    size: 'large',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}

// 实际使用示例
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h3 style={{ marginBottom: '16px', color: 'var(--dark-7)' }}>用户档案标签</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <Tag color="purple">VIP会员</Tag>
        <Tag color="green">已认证</Tag>
        <Tag color="blue">活跃用户</Tag>
        <Tag color="orange">新用户</Tag>
        <Tag color="pink">推荐达人</Tag>
      </div>
    </div>
  ),
}
