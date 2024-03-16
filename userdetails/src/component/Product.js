import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <div>
        Product page<br></br><br></br>
        <nav className='pro'>
            <Link to='most'>most viewed  </Link>
            <Link to='new'>new</Link>
            <br></br><br></br>
            <Outlet/>
        </nav>
    </div>
  )
}
