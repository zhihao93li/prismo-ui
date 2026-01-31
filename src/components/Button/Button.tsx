import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import styles from './Button.module.css'

// Optional react-router-dom support
type LinkComponent = any

let Link: LinkComponent
try {
  // @ts-ignore - Dynamic import for optional dependency
  Link = require('react-router-dom').Link
} catch {
  // react-router-dom not available
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: React.ReactNode
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light'
  /** Button size */
  size?: 'small' | 'medium' | 'large'
  /** React Router Link path */
  to?: string
  /** External link href */
  href?: string
  /** Show arrow icon */
  showArrow?: boolean
  /** Additional class name */
  className?: string
  /** Disabled state */
  disabled?: boolean
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * Button component with multiple variants and sizes
 * Supports navigation via react-router-dom Link or external href
 * Fully responsive with mobile-first design
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'medium',
  to,
  href,
  showArrow = false,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} weight="bold" className={styles.arrow} />}
    </>
  )

  // React Router Link mode
  if (to && Link && !disabled) {
    return (
      <Link to={to} className={buttonClass} {...(props as any)}>
        {content}
      </Link>
    )
  }

  // External link mode
  if (href && !disabled) {
    return (
      <a
        href={href}
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  // Button mode
  return (
    <button
      ref={ref}
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
})

Button.displayName = 'Button'
