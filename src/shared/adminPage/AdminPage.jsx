import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from '../slices/auth'



function AdminPage() {
    const isAuth = useSelector(selectIsAuth)

    if (!isAuth) {
        return <Navigate to="/" />
    }

  return (
    <main>
        admin page
    </main>
  )
}

export default AdminPage
