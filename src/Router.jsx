import Footer from './components/Footer'
import Error404 from './components/Error404'
import Home from './components/Home'
import Nav from './components/Nav'
import Single from './components/Single'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
const router = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/single/:id" element = {<Single/>}/>
    <Route path="/" element={ <Home /> }/>
    <Route path="/news" element={ <Footer /> }/>
    <Route path="/error404" element={ <Error404 /> }/>
    <Route path="*" element={ <Navigate to='/error404'/> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default router
