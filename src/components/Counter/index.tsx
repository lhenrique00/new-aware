import React, { useEffect, useRef, useState } from 'react'
import { animate, motion } from 'framer-motion'

export type CounterProps = {
  from: number
  to: number
}

const Counter = ({ from, to }: CounterProps) => {
  const nodeRef = useRef<HTMLParagraphElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(node)

    return () => {
      observer.unobserve(node)
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    const node = nodeRef.current
    if (!node) return

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        node.textContent = Math.round(value).toString()
      }
    })

    return () => controls.stop()
  }, [from, to, isInView])

  return (
    <motion.p
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, delay: 0.5 }}
    />
  )
}

export default Counter
