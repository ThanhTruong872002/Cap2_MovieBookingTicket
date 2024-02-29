import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Account from '../pages/Account'
import MainLayOut from 'src/layouts/MainLayout'
import Home from 'src/pages/Home'
import Profile from 'src/pages/Profile'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  // nếu đã login rồi thì tiếp tục vào còn nếu chưa login thì chuyển đến trang account
  return isAuthenticated ? <Outlet /> : <Navigate to='/account' />
}

function RejectedRouted() {
  const { isAuthenticated } = useContext(AppContext)
  // nếu chưa login thì cho vào, còn nếu login rồi thì đế trang home
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayOut>
          <Home />
        </MainLayOut>
      ),
    },
    {
      path: '',
      element: <RejectedRouted />,
      children: [
        {
          path: '/account',
          element: <Account />,
        },
      ],
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayOut>
              <Profile />
            </MainLayOut>
          ),
        },
      ],
    },
  ])
  return routeElements
}
