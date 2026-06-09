import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Users } from './pages/Users.page';
import { ContactDetails } from './pages/ContactDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/contact-detail/:id',
    element: <ContactDetails />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
