import { useRoutes } from 'react-router-dom'
import Account from '../pages/Account'
import MainLayOut from 'src/layouts/MainLayout'
import Home from 'src/pages/Home'
import Profile from 'src/pages/Profile'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <Account />,
    },
    {
      path: '/home',
      element: (
        <MainLayOut>
          <Home/>
        </MainLayOut>
      ),
    },
    {
      path: '/profile',
      element: (
        <MainLayOut>
          <Profile/>
        </MainLayOut>
      )
    }
  ])
  return routeElements
}
