# BirthInfoForm - 复杂表单案例

完整的表单实现案例，展示如何使用 Prismo UI 的表单组件构建复杂的多字段表单。

## 功能特性

✅ **多种表单组件组合**
- FormInput - 文本输入
- FormSelect - 下拉选择（年月日时分）
- ButtonGroup - 单选按钮组（性别、历法）

✅ **多级联动选择**
- 省份 → 城市 → 区县三级联动
- 自动重置下级选项

✅ **表单验证**
- 必填项验证
- 字段格式验证
- 错误提示显示

✅ **响应式布局**
- 移动端：单列布局
- 桌面端：多列网格布局
- 自适应间距和字体大小

## 使用方式

\`\`\`tsx
import { useState } from 'react'
import { BirthInfoForm, type BirthInfo } from '@prismo/ui'

function MyForm() {
  const [formData, setFormData] = useState<BirthInfo>({
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
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = () => {
    // 验证逻辑
    const newErrors: Record<string, string> = {}
    
    if (!formData.name) {
      newErrors.name = '请输入称呼'
    }
    
    if (!formData.location.province) {
      newErrors.province = '请选择省份'
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      // 提交表单
      console.log('Form data:', formData)
    }
  }

  return (
    <>
      <BirthInfoForm
        value={formData}
        onChange={setFormData}
        errors={errors}
      />
      
      <button onClick={handleSubmit}>提交</button>
    </>
  )
}
\`\`\`

## 类型定义

\`\`\`typescript
interface BirthInfo {
  name: string
  gender: 'male' | 'female'
  calendarType: 'solar' | 'lunar'
  birthYear: number
  birthMonth: number
  birthDay: number
  birthHour: number
  birthMinute: number
  location: {
    province: string
    city: string
    district: string
  }
}

interface BirthInfoFormProps {
  value: BirthInfo
  onChange: (value: BirthInfo) => void
  errors?: Record<string, string>
  className?: string
}
\`\`\`

## 实现亮点

1. **组件复用** - 充分利用已有的基础组件
2. **状态管理** - 合理的表单状态结构
3. **用户体验** - 联动选择、即时验证
4. **响应式设计** - Mobile-first 布局策略
5. **类型安全** - 完整的 TypeScript 类型定义

## 扩展建议

- 添加更多省市区数据（可从 API 加载）
- 集成日期验证（如闰年、月份天数）
- 添加农历转换功能
- 集成地理位置 API
- 添加表单草稿保存功能
