import React from 'react'
import { Check } from '@phosphor-icons/react'
import styles from './Checkbox.module.css'

export interface CheckboxProps {
  label?: string
  name: string
  checked?: boolean
  onChange?: (e: { target: { name: string; checked: boolean } }) => void
  disabled?: boolean
  className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  className = '',
}) => {
  const handleChange = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!disabled) {
      onChange?.({ target: { name, checked: !checked } })
    }
  }

  return (
    <label 
      className={`${styles.checkbox} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={handleChange}
    >
      <div className={`${styles.box} ${checked ? styles.checked : ''}`}>
        {checked && <Check size={14} weight="bold" />}
      </div>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="checkbox"
        name={name}
        checked={!!checked}
        onChange={() => {}} // Controlled component
        disabled={disabled}
        className={styles.input}
        tabIndex={-1}
      />
    </label>
  )
}
