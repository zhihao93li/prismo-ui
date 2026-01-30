import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast } from './Toast'

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ToastProvider>

// Demo component
function ToastDemo() {
  const toast = useToast()

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'all 0.2s',
    minWidth: '200px',
  }

  const primaryStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, rgb(138, 67, 225), rgb(213, 17, 253))',
    color: 'white',
  }

  const secondaryStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'rgb(244, 242, 241)',
    color: 'rgb(17, 17, 17)',
  }

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <h2>Toast 通知示例</h2>
      <p>点击按钮触发不同类型的通知：</p>
      
      <button 
        style={primaryStyle}
        onClick={() => {
          console.log('Success button clicked')
          toast.success('操作成功！')
        }}
      >
        Success Toast
      </button>
      
      <button 
        style={secondaryStyle}
        onClick={() => {
          console.log('Error button clicked')
          toast.error('发生错误，请重试')
        }}
      >
        Error Toast
      </button>
      
      <button 
        style={secondaryStyle}
        onClick={() => {
          console.log('Warning button clicked')
          toast.warning('请注意：这是警告信息')
        }}
      >
        Warning Toast
      </button>
      
      <button 
        style={secondaryStyle}
        onClick={() => {
          console.log('Info button clicked')
          toast.info('这是一条提示信息')
        }}
      >
        Info Toast
      </button>

      <h3 style={{ marginTop: '20px' }}>多条通知</h3>
      
      <button 
        style={primaryStyle}
        onClick={() => {
          toast.success('第一条通知')
          setTimeout(() => toast.info('第二条通知'), 300)
          setTimeout(() => toast.warning('第三条通知'), 600)
        }}
      >
        多条通知
      </button>

      <button 
        style={primaryStyle}
        onClick={() => toast.success('这条通知会持续 10 秒', 10000)}
      >
        长时间通知 (10s)
      </button>

      <button 
        style={secondaryStyle}
        onClick={() => toast.info('这是一条很长的通知消息，用来测试文本换行和布局是否正常工作。Lorem ipsum dolor sit amet.', 5000)}
      >
        长文本通知
      </button>
    </div>
  )
}

// 默认状态
export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
}

// 所有类型一起显示
export const AllTypes: Story = {
  render: () => {
    function AllTypesDemo() {
      const toast = useToast()
      
      const showAllTypes = () => {
        console.log('Showing all types')
        toast.success('操作成功完成！')
        setTimeout(() => toast.error('发生错误，请重试'), 400)
        setTimeout(() => toast.warning('注意：库存不足'), 800)
        setTimeout(() => toast.info('系统更新可用'), 1200)
      }

      return (
        <div style={{ padding: '40px' }}>
          <button 
            onClick={showAllTypes}
            style={{
              padding: '14px 32px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, rgb(138, 67, 225), rgb(213, 17, 253))',
              color: 'white',
            }}
          >
            显示所有类型
          </button>
        </div>
      )
    }

    return (
      <ToastProvider>
        <AllTypesDemo />
      </ToastProvider>
    )
  },
}

// 移动端视图
export const MobileView: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

// Tablet 视图
export const TabletView: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
