import React from 'react'
import styles from './Card.module.css'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: React.ReactNode
  /** Visual variant */
  variant?: 'default' | 'outlined' | 'gradient' | 'dark'
  /** Padding size */
  padding?: 'none' | 'small' | 'medium' | 'large'
  /** Enable hover animation */
  hover?: boolean
  /** Additional class name */
  className?: string
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * Card component with multiple variants and padding options
 * Fully responsive with mobile-first design
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  children,
  variant = 'default',
  padding = 'medium',
  hover = false,
  className = '',
  onClick,
  ...props
}, ref) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    hover && styles.hover,
    onClick && styles.clickable,
    className
  ].filter(Boolean).join(' ')

  return (
    <div
      ref={ref}
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(e as any)
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'
