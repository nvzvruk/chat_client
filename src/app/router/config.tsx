import { ReactNode } from 'react'
import { ChatPage } from '@/pages/chat'
import { LoginPage } from '@/pages/login'
import { SignUpPage } from '@/pages/signup'
import { RoutePath } from '@/shared/types'
import { HomePage } from '@/pages/home'

interface RouteConfig {
  path: RoutePath
  element: ReactNode
  requireAuth?: boolean
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
    requireAuth: true,
  },
  {
    path: '*',
    element: <div>Not exists</div>,
  },
]
