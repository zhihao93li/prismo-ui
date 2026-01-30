import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { BirthInfoForm } from './BirthInfoForm'
import type { BirthInfo } from './BirthInfoForm'
import { Card } from '../../Card'

const meta: Meta<typeof BirthInfoForm> = {
  title: 'Form/BirthInfoForm (Example)',
  component: BirthInfoForm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const INITIAL_DATA: BirthInfo = {
  name: '',
  gender: 'female',
  calendarType: 'solar',
  birthYear: 1990,
  birthMonth: 1,
  birthDay: 1,
  birthHour: 12,
  birthMinute: 0,
  location: {
    province: '',
    city: '',
    district: '',
  },
}

export const Default: Story = {
  render: () => {
    const [formData, setFormData] = useState<BirthInfo>(INITIAL_DATA)

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>出生信息表单</h2>
        <p style={{ color: 'var(--grey-50)', marginBottom: '24px' }}>
          完整的表单案例：展示多级联动选择、表单验证、响应式布局
        </p>
        
        <Card padding="large">
          <BirthInfoForm value={formData} onChange={setFormData} />
          
          <button
            style={{
              width: '100%',
              marginTop: '24px',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, rgb(138, 67, 225), rgb(213, 17, 253))',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Form submitted:', formData)}
          >
            提交表单
          </button>
        </Card>

        <div
          style={{
            marginTop: '24px',
            padding: '16px',
            background: 'var(--light-96)',
            borderRadius: '12px',
            fontSize: '14px',
          }}
        >
          <strong>当前表单数据：</strong>
          <pre style={{ marginTop: '8px', overflow: 'auto' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    )
  },
}

export const WithValidation: Story = {
  render: () => {
    const [formData, setFormData] = useState<BirthInfo>(INITIAL_DATA)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validate = () => {
      const newErrors: Record<string, string> = {}

      if (!formData.name.trim()) {
        newErrors.name = '请输入称呼'
      } else if (formData.name.length > 10) {
        newErrors.name = '称呼不能超过10个字'
      }

      if (!formData.location.province) {
        newErrors.province = '请选择省份'
      }
      if (!formData.location.city) {
        newErrors.city = '请选择城市'
      }
      if (!formData.location.district) {
        newErrors.district = '请选择区县'
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }

    const handleSubmit = () => {
      if (validate()) {
        alert('表单验证通过！')
        console.log('Form data:', formData)
      } else {
        alert('请填写所有必填项')
      }
    }

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>带验证的表单</h2>
        <p style={{ color: 'var(--grey-50)', marginBottom: '24px' }}>
          点击提交按钮查看表单验证效果
        </p>

        <Card padding="large">
          <BirthInfoForm
            value={formData}
            onChange={(newData) => {
              setFormData(newData)
              // Clear errors when user changes fields
              setErrors({})
            }}
            errors={errors}
          />

          <button
            style={{
              width: '100%',
              marginTop: '24px',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, rgb(138, 67, 225), rgb(213, 17, 253))',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            onClick={handleSubmit}
          >
            提交表单
          </button>
        </Card>
      </div>
    )
  },
}

export const Prefilled: Story = {
  render: () => {
    const [formData, setFormData] = useState<BirthInfo>({
      name: '张三',
      gender: 'male',
      calendarType: 'solar',
      birthYear: 1995,
      birthMonth: 6,
      birthDay: 15,
      birthHour: 14,
      birthMinute: 30,
      location: {
        province: '广东省',
        city: '深圳市',
        district: '南山区',
      },
    })

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>预填充数据示例</h2>
        <p style={{ color: 'var(--grey-50)', marginBottom: '24px' }}>
          演示表单的编辑场景
        </p>

        <Card padding="large">
          <BirthInfoForm value={formData} onChange={setFormData} />

          <button
            style={{
              width: '100%',
              marginTop: '24px',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, rgb(138, 67, 225), rgb(213, 17, 253))',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Updated data:', formData)}
          >
            更新信息
          </button>
        </Card>
      </div>
    )
  },
}

export const MobileView: Story = {
  render: () => {
    const [formData, setFormData] = useState<BirthInfo>(INITIAL_DATA)

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>移动端视图</h2>
        <p style={{ color: 'var(--grey-50)', marginBottom: '24px' }}>
          表单在移动端的响应式布局
        </p>

        <Card padding="large">
          <BirthInfoForm value={formData} onChange={setFormData} />
        </Card>
      </div>
    )
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
}
