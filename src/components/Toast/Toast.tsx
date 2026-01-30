import React, { createContext, useContext, useState, useCallback } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Warning, Info, X } from '@phosphor-icons/react'
import styles from './Toast.module.css'

// Types
export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: number
  message: string
  type: ToastType
}

export interface ToastContextValue {
  success: (message: string, duration?: number) => number
  error: (message: string, duration?: number) => number
  warning: (message: string, duration?: number) => number
  info: (message: string, duration?: number) => number
}

// Context
const ToastContext = createContext<ToastContextValue | null>(null)

// Icons mapping
const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: Warning,
  info: Info,
}

// Provider
export interface ToastProviderProps {
  children: React.ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: number) => {
    console.log('Removing toast:', id)
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const addToast = useCallback((message: string, type: ToastType = 'info', duration: number = 3000) => {
    const id = Date.now()
    console.log('Adding toast:', { id, message, type, duration })
    setToasts((prev) => {
      const newToasts = [...prev, { id, message, type }]
      console.log('Current toasts:', newToasts)
      return newToasts
    })

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }

    return id
  }, [removeToast])

  const toast: ToastContextValue = {
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    warning: (message, duration) => addToast(message, 'warning', duration),
    info: (message, duration) => addToast(message, 'info', duration),
  }

  console.log('ToastProvider rendering, toasts count:', toasts.length, toasts)

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className={styles.toastContainer}>
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => {
            const Icon = icons[t.type]
            console.log('Rendering toast:', t)
            return (
              <m.div
                key={t.id}
                className={`${styles.toast} ${styles[t.type]}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                role="alert"
                aria-live="assertive"
              >
                <Icon size={20} weight="fill" className={styles.icon} />
                <span className={styles.message}>{t.message}</span>
                <button
                  className={styles.closeButton}
                  onClick={() => removeToast(t.id)}
                  aria-label="Close notification"
                >
                  <X size={16} />
                </button>
              </m.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

// Hook
export function useToast(): ToastContextValue {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
