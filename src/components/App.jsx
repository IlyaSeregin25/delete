import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@components/pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './pages/Layout';
import { PATHS } from '@/constants';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import PhotosPage from './pages/PhotosPage';

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
          path: PATHS.photos,
          element: <PhotosPage />,
        },
        {
          path: PATHS.services,
          element: <ServicesPage />,
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
