import React, { useMemo } from 'react'
import { FormInput } from '../FormInput'
import { FormSelect } from '../FormSelect'
import { ButtonGroup } from '../ButtonGroup'
import styles from './BirthInfoForm.module.css'

// Types
export interface BirthInfo {
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

export interface BirthInfoFormProps {
  value: BirthInfo
  onChange: (value: BirthInfo) => void
  errors?: Record<string, string>
  className?: string
}

// Constants
const GENDER_OPTIONS = [
  { value: 'male', label: '男' },
  { value: 'female', label: '女' },
]

const CALENDAR_OPTIONS = [
  { value: 'solar', label: '阳历' },
  { value: 'lunar', label: '阴历' },
]

// Simplified provinces (full data would be loaded from API)
const SAMPLE_PROVINCES = [
  { 
    value: '北京市', 
    label: '北京市',
    cities: [
      { 
        value: '北京市', 
        label: '北京市',
        districts: [
          { value: '东城区', label: '东城区' },
          { value: '西城区', label: '西城区' },
          { value: '朝阳区', label: '朝阳区' },
        ]
      }
    ]
  },
  { 
    value: '上海市', 
    label: '上海市',
    cities: [
      { 
        value: '上海市', 
        label: '上海市',
        districts: [
          { value: '黄浦区', label: '黄浦区' },
          { value: '徐汇区', label: '徐汇区' },
          { value: '浦东新区', label: '浦东新区' },
        ]
      }
    ]
  },
  { 
    value: '广东省', 
    label: '广东省',
    cities: [
      { 
        value: '广州市', 
        label: '广州市',
        districts: [
          { value: '天河区', label: '天河区' },
          { value: '海珠区', label: '海珠区' },
        ]
      },
      { 
        value: '深圳市', 
        label: '深圳市',
        districts: [
          { value: '南山区', label: '南山区' },
          { value: '福田区', label: '福田区' },
        ]
      }
    ]
  },
]

/**
 * BirthInfoForm - 复杂表单案例
 * 展示表单组件的综合使用：FormInput、FormSelect、ButtonGroup
 * 包含多级联动选择、表单验证、响应式布局
 */
export const BirthInfoForm: React.FC<BirthInfoFormProps> = ({
  value,
  onChange,
  errors = {},
  className = '',
}) => {
  // Generate year options (current year to 1900)
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear()
    const result: Array<{ value: number; label: string }> = []
    for (let i = currentYear; i >= 1900; i--) {
      result.push({ value: i, label: `${i}年` })
    }
    return result
  }, [])

  // Month options
  const months = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}月`,
    }))
  }, [])

  // Day options
  const days = useMemo(() => {
    return Array.from({ length: 31 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}日`,
    }))
  }, [])

  // Hour options
  const hours = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      value: i,
      label: `${i}时`,
    }))
  }, [])

  // Minute options
  const minutes = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      value: i,
      label: `${i}分`,
    }))
  }, [])

  // Get current cities for selected province
  const currentCities = useMemo(() => {
    const province = SAMPLE_PROVINCES.find(
      (p) => p.value === value.location?.province
    )
    return province ? province.cities : []
  }, [value.location?.province])

  // Get current districts for selected city
  const currentDistricts = useMemo(() => {
    const city = currentCities.find((c) => c.value === value.location?.city)
    return city ? city.districts : []
  }, [value.location?.city, currentCities])

  // Handle field changes
  const handleChange = (field: keyof BirthInfo, newVal: any) => {
    onChange({
      ...value,
      [field]: newVal,
    })
  }

  // Province change -> reset city & district
  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({
      ...value,
      location: {
        province: e.target.value,
        city: '',
        district: '',
      },
    })
  }

  // City change -> reset district
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({
      ...value,
      location: {
        ...value.location,
        city: e.target.value,
        district: '',
      },
    })
  }

  // District change
  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({
      ...value,
      location: {
        ...value.location,
        district: e.target.value,
      },
    })
  }

  return (
    <div className={`${styles.formGrid} ${className}`}>
      {/* Name Input */}
      <div className={styles.fullWidth}>
        <FormInput
          label="称呼"
          value={value.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
          placeholder="请输入称呼"
          maxLength={10}
          required
        />
      </div>

      {/* Gender & Calendar Type */}
      <div className={styles.row}>
        <div>
          <div className={styles.sectionTitle}>性别</div>
          <ButtonGroup
            options={GENDER_OPTIONS}
            value={value.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            fullWidth
          />
        </div>
        <div>
          <div className={styles.sectionTitle}>历法</div>
          <ButtonGroup
            options={CALENDAR_OPTIONS}
            value={value.calendarType}
            onChange={(e) => handleChange('calendarType', e.target.value)}
            fullWidth
          />
        </div>
      </div>

      {/* Date Selection */}
      <div>
        <div className={styles.sectionTitle}>出生日期</div>
        <div className={styles.dateRow}>
          <FormSelect
            options={years}
            value={value.birthYear}
            onChange={(e) => handleChange('birthYear', parseInt(e.target.value))}
            error={errors.birthYear}
          />
          <FormSelect
            options={months}
            value={value.birthMonth}
            onChange={(e) => handleChange('birthMonth', parseInt(e.target.value))}
            error={errors.birthMonth}
          />
          <FormSelect
            options={days}
            value={value.birthDay}
            onChange={(e) => handleChange('birthDay', parseInt(e.target.value))}
            error={errors.birthDay}
          />
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <div className={styles.sectionTitle}>出生时间</div>
        <div className={styles.timeRow}>
          <FormSelect
            options={hours}
            value={value.birthHour}
            onChange={(e) => handleChange('birthHour', parseInt(e.target.value))}
            error={errors.birthHour}
          />
          <FormSelect
            options={minutes}
            value={value.birthMinute}
            onChange={(e) =>
              handleChange('birthMinute', parseInt(e.target.value))
            }
            error={errors.birthMinute}
          />
        </div>
      </div>

      {/* Location Selection */}
      <div>
        <div className={styles.sectionTitle}>出生地点</div>
        <div className={styles.locationRow}>
          <FormSelect
            options={SAMPLE_PROVINCES}
            value={value.location?.province}
            onChange={handleProvinceChange}
            error={errors.province}
          />
          <FormSelect
            options={currentCities}
            value={value.location?.city}
            onChange={handleCityChange}
            disabled={!value.location?.province}
            error={errors.city}
          />
          <FormSelect
            options={currentDistricts}
            value={value.location?.district}
            onChange={handleDistrictChange}
            disabled={!value.location?.city}
            error={errors.district}
          />
        </div>
      </div>
    </div>
  )
}
