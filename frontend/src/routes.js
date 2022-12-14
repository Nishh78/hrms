import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import UserCreate from './pages/dashboard/UserCreate';
import DashboardAppPage from './pages/DashboardAppPage';
import UserList from './pages/UserList';
import LeaveList from './pages/LeaveList';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [{ path: '', element: <DashboardAppPage /> }],
    },
    {
      path: 'user',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <UserList /> },
        { path: 'create', element: <UserCreate /> },
        { path: 'edit/:id', element: <UserCreate /> },
      ],
    },
    {
      path: 'leaves',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <LeaveList /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
