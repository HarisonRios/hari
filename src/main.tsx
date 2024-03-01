import "./styles/_main.scss";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Projects from './Projects.tsx';
import NotFound from "./NotFound.tsx";
import { RouterProvider, createBrowserRouter,  } from 'react-router-dom';


const myRouter = createBrowserRouter([
  {
   path: "/",
   element: <App />,
   children: [
    {path: "/", element: <App/>, index: true},
    {path: "/Projects", element: <Projects/>},
    {path:  "/*", element: <NotFound/>}
   ]
 }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
)

