import React from 'react'
import { CircleNotch } from '@phosphor-icons/react'
import styles from './Loading.module.css'

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'purple' | 'white'
  className?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = 'default', 
  className = '' 
}) => {
  return (
    <CircleNotch 
      className={`${styles.spinner} ${styles[size]} ${styles[color]} ${className}`} 
      weight="bold" 
    />
  )
}

export interface LoadingOverlayProps {
  text?: string
  fixed?: boolean
  className?: string
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  text, 
  fixed = false, 
  className = '' 
}) => {
  return (
    <div className={`${styles.overlay} ${fixed ? styles.fixed : ''} ${className}`}>
      <LoadingSpinner size="large" color="purple" />
      {text && <span className={styles.text}>{text}</span>}
    </div>
  )
}
