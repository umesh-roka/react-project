import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/dash.js/Home';
import About from './features/dash.js/About';
import Contact from './features/dash.js/Contact';
import Chil1 from './features/dash.js/Chil1';
import Child2 from './features/dash.js/Child2';
const router =createBrowserRouter([
  {
path:"/",
element:<Home/>,
children:[
  {index:true,element:<Chil1/>},
  {path:'child2',element:<Child2/>}
]

  },
  {
    path:'about',
    element:<About/>,
  },

  {
    path:'contact',
    element:<Contact/>
  }
]);
const App = () => {

return <RouterProvider router={router}/>
}

export default App
