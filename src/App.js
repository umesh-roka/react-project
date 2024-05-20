import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/dash.js/Home';

import RouteLayout from './ui/RouteLayout';
import About from './features/dash.js/About';
import Contact from './features/dash.js/Contact';
import NotFound from './ui/NotFound';
import Detail from './shared/Detail';
const router =createBrowserRouter([
  {
path:"/",
element:<RouteLayout/>,
children:[
  {index:true,element:<Home/>},
  {path:'product/:id',element:<Detail/>},
  {path:'about',element:<About/>},
  {path:'contact',element:<Contact/>},
 

]

  },
  {path:'*',element:<NotFound/>}
]);
const App = () => {

return <RouterProvider router={router}/>
}

export default App
