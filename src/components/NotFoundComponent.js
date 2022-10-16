import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const NotFoundComponent = ({children}) => {
  return (
    <Routes>
        {children}
        <Route path='*' element={<h1>404</h1>}/>
    </Routes>
  )
}

export default NotFoundComponent