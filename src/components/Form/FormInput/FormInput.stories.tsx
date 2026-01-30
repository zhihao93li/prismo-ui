import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormInput } from './FormInput'

const meta: Meta<typeof FormInput> = {
  title: 'Components/Form/FormInput',
  component: FormInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormInput>

// 默认状态
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormInput
        label="用户名"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="请输入用户名"
      />
    )
  },
}

// 必填字段
export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormInput
        label="邮箱地址"
        name="email"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="example@email.com"
        required
      />
    )
  },
}

// 错误状态
export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('invalid')
    return (
      <FormInput
        label="密码"
        name="password"
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error="密码长度至少为 8 位"
      />
    )
  },
}

// 禁用状态
export const Disabled: Story = {
  args: {
    label: '用户 ID',
    name: 'userId',
    value: '12345',
    disabled: true,
    placeholder: '此字段不可编辑',
  },
}

// 不同类型
export const AllTypes: Story = {
  render: () => {
    const [form, setForm] = useState({
      text: '',
      email: '',
      password: '',
      number: '',
      tel: '',
      url: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
        <FormInput label="文本" name="text" value={form.text} onChange={handleChange} placeholder="文本输入" />
        <FormInput label="邮箱" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" />
        <FormInput label="密码" name="password" type="password" value={form.password} onChange={handleChange} placeholder="请输入密码" />
        <FormInput label="数字" name="number" type="number" value={form.number} onChange={handleChange} placeholder="0" />
        <FormInput label="电话" name="tel" type="tel" value={form.tel} onChange={handleChange} placeholder="138-0000-0000" />
        <FormInput label="网址" name="url" type="url" value={form.url} onChange={handleChange} placeholder="https://example.com" />
      </div>
    )
  },
}

// 移动端视图
export const MobileView: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormInput
        label="手机号"
        name="phone"
        type="tel"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="请输入手机号"
      />
    )
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
