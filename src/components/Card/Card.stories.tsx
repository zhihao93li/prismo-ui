import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'gradient', 'dark'],
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    hover: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const SampleContent = () => (
  <div>
    <h3 style={{ marginBottom: '8px', fontSize: '20px', fontWeight: 600 }}>Card Title</h3>
    <p style={{ color: 'var(--grey-50)', lineHeight: 1.6 }}>
      This is a sample card with some content. Cards are versatile containers
      that can hold any type of content.
    </p>
  </div>
)

// ========== Default State ========== //
export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'medium',
    children: <SampleContent />,
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'medium',
    children: <SampleContent />,
  },
}

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    padding: 'medium',
    children: <SampleContent />,
  },
}

export const Dark: Story = {
  args: {
    variant: 'dark',
    padding: 'medium',
    children: <SampleContent />,
  },
}

// ========== Padding Variants ========== //
export const AllPaddings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Card padding="none">
        <div style={{ padding: '8px', background: 'var(--light-96)' }}>
          No Padding (none)
        </div>
      </Card>
      <Card padding="small">
        <div>Small Padding</div>
      </Card>
      <Card padding="medium">
        <div>Medium Padding</div>
      </Card>
      <Card padding="large">
        <div>Large Padding</div>
      </Card>
    </div>
  ),
}

// ========== Interactive States ========== //
export const WithHover: Story = {
  args: {
    variant: 'default',
    padding: 'medium',
    hover: true,
    children: <div>Hover me!</div>,
  },
}

export const Clickable: Story = {
  args: {
    variant: 'default',
    padding: 'medium',
    children: <div>Click me!</div>,
    onClick: () => alert('Card clicked!'),
  },
}

// ========== All Variants ========== //
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <Card variant="default" padding="medium">
        <h4>Default</h4>
        <p>Default card style with shadow</p>
      </Card>
      <Card variant="outlined" padding="medium">
        <h4>Outlined</h4>
        <p>Outlined card with border</p>
      </Card>
      <Card variant="gradient" padding="medium">
        <h4>Gradient</h4>
        <p>Card with gradient top line</p>
      </Card>
      <Card variant="dark" padding="medium">
        <h4>Dark</h4>
        <p>Dark theme card</p>
      </Card>
    </div>
  ),
}

// ========== Mobile View (375px) ========== //
export const MobileView: Story = {
  args: {
    variant: 'gradient',
    padding: 'medium',
    children: <SampleContent />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}

// ========== Tablet View (768px) ========== //
export const TabletView: Story = {
  args: {
    variant: 'gradient',
    padding: 'medium',
    children: <SampleContent />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

// ========== Desktop View (1024px+) ========== //
export const DesktopView: Story = {
  args: {
    variant: 'gradient',
    padding: 'large',
    children: <SampleContent />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}

// ========== Complex Content ========== //
export const WithComplexContent: Story = {
  render: () => (
    <Card variant="gradient" padding="large" hover>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600 }}>Featured Article</h2>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Placeholder"
          style={{ borderRadius: '12px', width: '100%' }}
        />
        <p style={{ lineHeight: 1.6, color: 'var(--grey-50)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ padding: '4px 12px', background: 'var(--light-94)', borderRadius: '20px', fontSize: '14px' }}>
            React
          </span>
          <span style={{ padding: '4px 12px', background: 'var(--light-94)', borderRadius: '20px', fontSize: '14px' }}>
            TypeScript
          </span>
        </div>
      </div>
    </Card>
  ),
}
