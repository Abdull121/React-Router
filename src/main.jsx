import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './About/About'
import Home from './components/Home/Home'
import Contact from './Contact/Contact'
import User from './User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// const router= createBrowserRouter([
//   { 
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route  loader={githubInfoLoader}  path='github' element={<Github/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>

    

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
