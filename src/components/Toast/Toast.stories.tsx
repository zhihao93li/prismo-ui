import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast } from './Toast'
import { Button } from '../Button'

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

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <h2>Toast 通知示例</h2>
      <p>点击按钮触发不同类型的通知：</p>
      
      <Button onClick={() => toast.success('操作成功！')} variant="primary">
        Success Toast
      </Button>
      
      <Button onClick={() => toast.error('发生错误，请重试')} variant="secondary">
        Error Toast
      </Button>
      
      <Button onClick={() => toast.warning('请注意：这是警告信息')} variant="outline">
        Warning Toast
      </Button>
      
      <Button onClick={() => toast.info('这是一条提示信息')} variant="ghost">
        Info Toast
      </Button>

      <Button 
        onClick={() => {
          toast.success('第一条通知')
          setTimeout(() => toast.info('第二条通知'), 300)
          setTimeout(() => toast.warning('第三条通知'), 600)
        }} 
        variant="light"
      >
        多条通知
      </Button>

      <Button 
        onClick={() => toast.success('这条通知会持续 10 秒', 10000)} 
        variant="primary"
      >
        长时间通知 (10s)
      </Button>

      <Button 
        onClick={() => toast.info('这是一条很长的通知消息，用来测试文本换行和布局是否正常工作。Lorem ipsum dolor sit amet.', 5000)} 
        variant="outline"
      >
        长文本通知
      </Button>
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

// 所有类型
export const AllTypes: Story = {
  render: () => {
    function AllTypesDemo() {
      const toast = useToast()
      
      const showAllTypes = () => {
        toast.success('操作成功完成！')
        setTimeout(() => toast.error('发生错误，请重试'), 400)
        setTimeout(() => toast.warning('注意：库存不足'), 800)
        setTimeout(() => toast.info('系统更新可用'), 1200)
      }

      return (
        <div style={{ padding: '40px' }}>
          <Button onClick={showAllTypes}>显示所有类型</Button>
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
      defaultViewport: 'mobile1',
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

// 真实场景：表单提交
export const FormSubmission: Story = {
  render: () => {
    function FormDemo() {
      const toast = useToast()
      
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        toast.info('正在提交...')
        
        // 模拟 API 请求
        setTimeout(() => {
          const success = Math.random() > 0.3
          if (success) {
            toast.success('表单提交成功！')
          } else {
            toast.error('提交失败，请检查网络连接')
          }
        }, 1500)
      }

      return (
        <div style={{ padding: '40px', maxWidth: '500px' }}>
          <h2>用户注册表单</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            <input type="text" placeholder="用户名" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="邮箱" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="密码" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <Button type="submit">提交注册</Button>
          </form>
        </div>
      )
    }

    return (
      <ToastProvider>
        <FormDemo />
      </ToastProvider>
    )
  },
}
