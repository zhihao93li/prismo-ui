import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

// 默认状态
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ padding: '40px' }}>
        <Button onClick={() => setIsOpen(true)}>打开 Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="默认 Modal">
          <p>这是一个默认的 Modal 组件。</p>
          <p>点击遮罩层或按 ESC 键可以关闭。</p>
        </Modal>
      </div>
    )
  },
}

// 所有尺寸
export const AllSizes: Story = {
  render: () => {
    const [size, setSize] = useState<'small' | 'medium' | 'large' | 'full' | null>(null)
    return (
      <div style={{ padding: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button onClick={() => setSize('small')}>Small Modal</Button>
        <Button onClick={() => setSize('medium')}>Medium Modal</Button>
        <Button onClick={() => setSize('large')}>Large Modal</Button>
        <Button onClick={() => setSize('full')}>Full Modal</Button>
        
        {size && (
          <Modal 
            isOpen={true} 
            onClose={() => setSize(null)} 
            title={`${size.charAt(0).toUpperCase() + size.slice(1)} Modal`}
            size={size}
          >
            <p>这是一个 {size} 尺寸的 Modal。</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Modal>
        )}
      </div>
    )
  },
}

// 无标题和关闭按钮
export const NoHeaderNoClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ padding: '40px' }}>
        <Button onClick={() => setIsOpen(true)}>打开 Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} showClose={false}>
          <h3>自定义内容</h3>
          <p>这个 Modal 没有标题和默认关闭按钮。</p>
          <Button onClick={() => setIsOpen(false)} variant="secondary">
            自定义关闭按钮
          </Button>
        </Modal>
      </div>
    )
  },
}

// 长内容滚动
export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ padding: '40px' }}>
        <Button onClick={() => setIsOpen(true)}>打开长内容 Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="服务条款">
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              第 {i + 1} 条：Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          ))}
          <Button onClick={() => setIsOpen(false)}>我已阅读并同意</Button>
        </Modal>
      </div>
    )
  },
}

// 移动端视图
export const MobileView: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={() => setIsOpen(true)}>打开 Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="移动端 Modal">
          <p>在移动端，Modal 从底部弹出，全宽显示。</p>
          <Button onClick={() => setIsOpen(false)}>关闭</Button>
        </Modal>
      </div>
    )
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

// Tablet 视图
export const TabletView: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={() => setIsOpen(true)}>打开 Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Tablet Modal" size="medium">
          <p>在 Tablet 上，Modal 居中显示，宽度适中。</p>
          <Button onClick={() => setIsOpen(false)}>关闭</Button>
        </Modal>
      </div>
    )
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

// 禁止点击遮罩关闭
export const DisableOverlayClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ padding: '40px' }}>
        <Button onClick={() => setIsOpen(true)}>打开 Modal</Button>
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          title="重要操作"
          closeOnOverlayClick={false}
          closeOnEsc={false}
        >
          <p>此 Modal 无法通过点击遮罩或按 ESC 关闭。</p>
          <p>必须点击关闭按钮或下方的按钮。</p>
          <Button onClick={() => setIsOpen(false)} variant="primary">
            确认并关闭
          </Button>
        </Modal>
      </div>
    )
  },
}
