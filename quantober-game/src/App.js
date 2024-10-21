import React from 'react';
import MathGame from './MathGame';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './SignUp';
import SignIn from './SignIn';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><MathGame/></>
    },{
      path: '/signup',
      element: <><SignUp/></>
    },{
      path: '/signin',
      element: <><SignIn/></>
    },{
      path: '/leaderboard',
      element: <><Leaderboard/></>
    },{
      path:'*',
      element:<><NotFound/></>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;