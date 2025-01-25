import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/modules/Navbar/Navbar';
import Footer from './components/modules/Footer/Footer';

function App():React.ReactElement {
  const router = useRoutes(routes)
  return (
      <>
      <Navbar/>
        {router}
        <Footer/>
      </>
  )
}

export default App