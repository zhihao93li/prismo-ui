import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner, LoadingOverlay } from './Loading';
import { Button } from '../Button';
import { useState } from 'react';

const meta = {
  title: 'Components/Loading',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  render: () => <LoadingSpinner />,
};

export const SpinnerSmall: Story = {
  render: () => <LoadingSpinner size="small" />,
};

export const SpinnerLarge: Story = {
  render: () => <LoadingSpinner size="large" />,
};

export const SpinnerWithText: Story = {
  render: () => (
    <div style={{ textAlign: 'center' }}>
      <LoadingSpinner />
      <p style={{ marginTop: '16px', color: 'var(--color-text-secondary)' }}>
        加载中...
      </p>
    </div>
  ),
};

export const Overlay: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);

    return (
      <div style={{ position: 'relative', minHeight: '300px', minWidth: '400px' }}>
        <div style={{ padding: '24px' }}>
          <h3>页面内容</h3>
          <p>这是一些示例内容</p>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? '隐藏加载' : '显示加载'}
          </Button>
        </div>
        {loading && <LoadingOverlay />}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

export const OverlayWithMessage: Story = {
  render: () => {
    const [loading, setLoading] = useState(true);

    return (
      <div style={{ position: 'relative', minHeight: '300px', minWidth: '400px' }}>
        <div style={{ padding: '24px' }}>
          <h3>数据加载</h3>
          <p>正在获取数据...</p>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? '完成加载' : '重新加载'}
          </Button>
        </div>
        {loading && <LoadingOverlay message="正在加载数据..." />}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};
