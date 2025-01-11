import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/modules/Navbar/Navbar';

function App():React.ReactElement {
  const router = useRoutes(routes)
  return (
      <>
      <Navbar/>
        {router}
      </>
  )
}

export default App