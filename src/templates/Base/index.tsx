// components/Layout.tsx
import React from 'react'
import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>
}

export default Layout
