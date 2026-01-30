import type { Meta, StoryObj } from '@storybook/react';
import { GradientBackground } from './GradientBackground';

const meta = {
  title: 'Components/GradientBackground',
  component: GradientBackground,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GradientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <GradientBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        padding: '48px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>渐变背景</h1>
        <p>这是一个动态渐变背景效果</p>
      </div>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <GradientBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        padding: '48px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h1>欢迎</h1>
          <p>这是一个带有渐变背景的卡片内容示例</p>
          <p>背景使用了柔和的渐变色彩，营造出优雅的视觉效果</p>
        </div>
      </div>
    </div>
  ),
};

export const LoginPage: Story = {
  render: () => (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <GradientBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        maxWidth: '400px',
        padding: '0 24px'
      }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.98)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '24px', textAlign: 'center' }}>
            登录
          </h2>
          <input 
            type="text" 
            placeholder="用户名" 
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <input 
            type="password" 
            placeholder="密码" 
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '24px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <button style={{
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            登录
          </button>
        </div>
      </div>
    </div>
  ),
};
