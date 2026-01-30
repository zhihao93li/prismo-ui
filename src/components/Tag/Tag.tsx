import React from 'react'
import styles from './Tag.module.css'

export interface TagProps {
  children: React.ReactNode
  color?: 'default' | 'light' | 'red' | 'purple' | 'green' | 'orange' | 'pink' | 'yellow' | 'blue'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export const Tag: React.FC<TagProps> = ({ 
  children, 
  color = 'default',
  size = 'medium',
  className = '' 
}) => {
  return (
    <span className={`${styles.tag} ${styles[color]} ${styles[size]} ${className}`}>
      {children}
    </span>
  )
}
