import { useState, useEffect } from 'react'

export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

/**
 * Hook to detect current responsive breakpoint
 * @returns Current breakpoint: 'mobile' | 'tablet' | 'desktop'
 */
export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
    if (typeof window === 'undefined') return 'mobile'
    
    const width = window.innerWidth
    if (width >= 1024) return 'desktop'
    if (width >= 768) return 'tablet'
    return 'mobile'
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const newBreakpoint: Breakpoint = 
        width >= 1024 ? 'desktop' :
        width >= 768 ? 'tablet' :
        'mobile'
      
      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return breakpoint
}

/**
 * Hook to check if current viewport matches a specific breakpoint
 * @param target Target breakpoint to match
 * @returns Whether current breakpoint matches
 */
export function useMatchBreakpoint(target: Breakpoint): boolean {
  const current = useBreakpoint()
  
  const order = { mobile: 0, tablet: 1, desktop: 2 }
  return order[current] >= order[target]
}
