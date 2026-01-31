import React, { useState, useRef, useEffect } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import styles from './FormSelect.module.css'

export interface SelectOption {
  value: string | number
  label: string
}

export interface FormSelectProps {
  label?: string
  name?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement> | { target: { name: string; value: string | number } }) => void
  options?: SelectOption[]
  placeholder?: string
  error?: string
  disabled?: boolean
  required?: boolean
  className?: string
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = '请选择',
  error,
  disabled = false,
  required = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selectedRef = useRef<HTMLDivElement>(null)

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 打开时滚动到选中项
  useEffect(() => {
    if (isOpen && selectedRef.current && dropdownRef.current) {
      const dropdown = dropdownRef.current
      const selected = selectedRef.current
      const scrollTop = selected.offsetTop - dropdown.clientHeight / 2 + selected.clientHeight / 2
      dropdown.scrollTop = Math.max(0, scrollTop)
    }
  }, [isOpen])

  const selectedOption = options.find(opt => opt.value === value)

  const handleSelect = (optionValue: string | number) => {
    onChange?.({ target: { name: name || '', value: optionValue } })
    setIsOpen(false)
  }

  return (
    <div className={`${styles.formGroup} ${error ? styles.hasError : ''} ${className}`} ref={selectRef}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div 
        className={`${styles.select} ${isOpen ? styles.open : ''} ${disabled ? styles.disabled : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={selectedOption ? styles.value : styles.placeholder}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <CaretDown size={18} className={styles.icon} />
      </div>
      
      {isOpen && !disabled && (
        <div className={styles.dropdown} ref={dropdownRef} role="listbox">
          {options.map((option) => (
            <div
              key={option.value}
              ref={option.value === value ? selectedRef : null}
              className={`${styles.option} ${option.value === value ? styles.selected : ''}`}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
