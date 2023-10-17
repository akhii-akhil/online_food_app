import React from 'react'
import { useNavigate } from 'react-router'

function Logout() {
    const navigate = useNavigate()
    
    localStorage.clear()
    navigate('/login')
    window.location.reload()
}

export default Logout