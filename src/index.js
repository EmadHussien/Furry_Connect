import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Outlet
} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Login from './LoginPage/Login';
import SignUp from './SignupPage/SignUp';
import AvailablePets from './AvaliablePetsPage/AvailablePets';
import Pet from './PetPage/Pet'
import Error from './HelperComponents/Error';
import { store } from './Redux/store';
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";



const queryClient = new QueryClient();

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path:"login",
        element: <Login />
      },
      {
        path:"signup",
        element: <SignUp />
      },
      {
        path:'pets_page/:pNum',
        element: <><Outlet /></>,
        children : [
          {
            index:true,
            element: <AvailablePets />
          },
          {
            path:"pet_id/:id",
            element: <Pet />
          }
          
        ]
      }
      
      ,
      {
        path: "*",
        element: <Navigate to="/" />
      }
      ,
      {
        path:"error",
        element: <Error />
      }
    ]
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={Routes} />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
  </QueryClientProvider>

);

