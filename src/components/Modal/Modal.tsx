import React, { useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { X } from '@phosphor-icons/react'
import styles from './Modal.module.css'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'full'
  showClose?: boolean
  className?: string
  closeOnOverlayClick?: boolean
  closeOnEsc?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showClose = true,
  className = '',
  closeOnOverlayClick = true,
  closeOnEsc = true,
}) => {
  // 禁止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC 关闭
  useEffect(() => {
    if (!closeOnEsc) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose, closeOnEsc])

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.modalWrapper}>
          <m.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleOverlayClick}
          />
          <m.div
            className={`${styles.modal} ${styles[size]} ${className}`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
          >
            {(title || showClose) && (
              <div className={styles.header}>
                {title && <h2 id="modal-title" className={styles.title}>{title}</h2>}
                {showClose && (
                  <button 
                    className={styles.closeButton} 
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                )}
              </div>
            )}
            <div className={styles.content}>
              {children}
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
