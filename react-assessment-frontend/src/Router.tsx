import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Users } from './pages/Users.page';
import { ContactDetails } from './pages/ContactDetails';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contact-detail/:id',
    element: <ContactDetails />,
    errorElement: <ErrorPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
