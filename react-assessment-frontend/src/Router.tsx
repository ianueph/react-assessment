import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Users } from './pages/Users.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
