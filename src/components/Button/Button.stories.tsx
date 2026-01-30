import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'light'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    showArrow: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ========== Default State ========== //
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const Light: Story = {
  args: {
    children: 'Light Button',
    variant: 'light',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

// ========== Sizes ========== //
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
}

// ========== With Arrow ========== //
export const WithArrow: Story = {
  args: {
    children: 'Get Started',
    showArrow: true,
  },
}

// ========== States ========== //
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const AsLink: Story = {
  args: {
    children: 'External Link',
    href: 'https://example.com',
    showArrow: true,
  },
}

// ========== All Variants ========== //
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <div style={{ background: '#111', padding: '16px', borderRadius: '8px' }}>
        <Button variant="light">Light (for dark bg)</Button>
      </div>
    </div>
  ),
}

// ========== Mobile View (375px) ========== //
export const MobileView: Story = {
  args: {
    children: 'Mobile Button',
    variant: 'primary',
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
    children: 'Tablet Button',
    variant: 'primary',
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
    children: 'Desktop Button',
    variant: 'primary',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}

// ========== Interactive Group ========== //
export const InteractiveGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        onClick={() => alert('Primary clicked!')}
      >
        Click Me
      </Button>
      <Button
        variant="secondary"
        showArrow
        onClick={() => alert('Secondary clicked!')}
      >
        With Arrow
      </Button>
      <Button
        variant="outline"
        size="small"
        onClick={() => alert('Small clicked!')}
      >
        Small Size
      </Button>
      <Button
        variant="ghost"
        size="large"
        onClick={() => alert('Large clicked!')}
      >
        Large Size
      </Button>
    </div>
  ),
}
