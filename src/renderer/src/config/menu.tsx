import App from '@renderer/App'
import { Error } from '@renderer/Error'
import { Calender } from '@renderer/features/calender/Calender'
import { Home } from '@renderer/features/home/Home'
import { Performance } from '@renderer/features/performance/Performance'
import { Setting } from '@renderer/features/setting/Setting'
import { Timer } from '@renderer/features/timer/Timer'
import { Todo } from '@renderer/features/todo/Todo'
import { RouteObject } from 'react-router-dom'

export interface IMenu {
  label: string
  navbar?: boolean
}

type TMenu = RouteObject & IMenu

export const MenuList: TMenu[] = [
  {
    label: 'Home',
    path: '/home',
    element: <Home />,
    errorElement: <Error />
  },
  {
    label: 'Performance',
    path: '/performance',
    element: <Performance />,
    errorElement: <Error />
  },
  {
    label: 'TODO',
    path: '/todo',
    element: <Todo />,
    errorElement: <Error />
  },
  {
    label: 'Calender',
    path: '/calender',
    element: <Calender />,
    errorElement: <Error />
  },
  {
    label: 'Timer',
    path: '/timer',
    element: <Timer />,
    errorElement: <Error />
  },
  {
    label: 'Setting',
    path: '/Setting',
    element: <Setting />,
    errorElement: <Error />
  }
]

export const RouteList: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: MenuList
  }
]
