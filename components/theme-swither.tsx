'use client'

import * as React from 'react'
import { Github, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
}

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()

  const setMetaColor = React.useCallback((color: string) => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', color)
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    setMetaColor(
      resolvedTheme === 'dark'
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    )
  }, [resolvedTheme, setTheme, setMetaColor])

  return (
    <Button
      variant='ghost'
      className='group/toggle h-8 w-8 px-0'
      onClick={toggleTheme}
    >
      <SunIcon className='hidden [html.dark_&]:block' />
      <MoonIcon className='hidden [html.light_&]:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
