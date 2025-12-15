import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from '@components/pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import ServicePage from './pages/ServicePage';
import PhotosPage from './pages/PhotosPage';
import TeachersPage from './pages/TeachersPage';
import { PATHS } from '@/constants';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          path: PATHS.main,
          element: <MainPage />,
        },
        {
          path: PATHS.aboutUs,
          element: <AboutUsPage />,
        },
        {
          path: PATHS.teachers,
          element: <TeachersPage />,
        },
        {
          path: PATHS.photos,
          element: <PhotosPage />,
        },
        {
          path: PATHS.contacts,
          element: <ContactsPage />,
        },
        {
          path: `${PATHS.main}:pageId`,
          element: <ServicePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
