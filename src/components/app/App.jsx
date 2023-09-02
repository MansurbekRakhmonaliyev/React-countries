import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from '../../layout/RootLayout'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about/:name' element={<About/>}/>
      </Route>
    )
  ) 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
