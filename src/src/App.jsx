import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const App = () => {
  return <RouterProvider router={router} />;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

export default App
