import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Detailsmovies from "./components/Detailsmovie"
import movies from './components/Data'
import React from 'react'
export default function App() {
  return (
    <div>
        {/* our Elements to route */}
 <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/Movie/:id" element={<Detailsmovies  movies={movies}/>}></Route>
        </Routes>
    </div>
  )
}
