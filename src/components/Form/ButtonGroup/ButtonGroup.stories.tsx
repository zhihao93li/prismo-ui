import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';

const meta = {
  title: 'Form/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'solar', label: '阳历' },
  { value: 'lunar', label: '阴历' },
];

const genderOptions = [
  { value: 'male', label: '男' },
  { value: 'female', label: '女' },
];

const viewModes = [
  { value: 'grid', label: '网格' },
  { value: 'list', label: '列表' },
  { value: 'card', label: '卡片' },
];

export const Default: Story = {
  args: {
    options,
    value: 'solar',
  },
};

export const Gender: Story = {
  args: {
    options: genderOptions,
    value: 'male',
  },
};

export const ThreeOptions: Story = {
  args: {
    options: viewModes,
    value: 'grid',
  },
};

export const Unselected: Story = {
  args: {
    options,
  },
};

export const FullWidth: Story = {
  args: {
    options,
    value: 'solar',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Disabled: Story = {
  args: {
    options,
    value: 'solar',
    disabled: true,
  },
};
