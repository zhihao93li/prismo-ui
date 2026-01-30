import type { Meta, StoryObj } from '@storybook/react';
import { FormSelect } from './FormSelect';

const meta = {
  title: 'Form/FormSelect',
  component: FormSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: '', label: '请选择' },
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
];

export const Default: Story = {
  args: {
    label: '选择器',
    options,
  },
};

export const WithValue: Story = {
  args: {
    label: '已选择',
    options,
    value: 'option2',
  },
};

export const Required: Story = {
  args: {
    label: '必填项',
    options,
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: '错误状态',
    options,
    error: '请选择一个有效选项',
  },
};

export const Disabled: Story = {
  args: {
    label: '禁用状态',
    options,
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: '全宽选择器',
    options,
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};
