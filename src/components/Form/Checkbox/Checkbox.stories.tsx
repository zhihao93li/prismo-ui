import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '我同意服务条款',
  },
};

export const Checked: Story = {
  args: {
    label: '已选中',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '禁用状态',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: '禁用且选中',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const LongLabel: Story = {
  args: {
    label: '我已阅读并同意《用户协议》和《隐私政策》，并愿意接收产品更新和营销信息',
  },
  parameters: {
    layout: 'padded',
  },
};
