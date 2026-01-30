import { useState, useEffect } from 'react'

/**
 * Hook to detect if the current device supports touch events
 * @returns Whether the device is a touch device
 */
export function useTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false
    
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore - legacy property
      navigator.msMaxTouchPoints > 0
    )
  })

  useEffect(() => {
    // Re-check on mount in case SSR initial value was wrong
    const hasTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore
      navigator.msMaxTouchPoints > 0

    if (hasTouch !== isTouchDevice) {
      setIsTouchDevice(hasTouch)
    }
  }, [isTouchDevice])

  return isTouchDevice
}

/**
 * Hook to get pointer type (mouse, touch, pen)
 * @returns Current pointer type
 */
export function usePointerType(): 'mouse' | 'touch' | 'pen' | 'unknown' {
  const [pointerType, setPointerType] = useState<'mouse' | 'touch' | 'pen' | 'unknown'>('unknown')

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      setPointerType(e.pointerType as 'mouse' | 'touch' | 'pen')
    }

    window.addEventListener('pointerdown', handlePointerDown)
    return () => window.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return pointerType
}
