import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (

<>

<h1 className='fixed-top'>Hamburguesas de Dinosaurios</h1>

  <nav className='bg-info'>

    <ul>

      <li><a href=''>Hamburguesas</a></li>
      <li><a href=''>Papas Fritas</a></li>
      <li><a href=''>Bebidas</a></li>

    </ul>

  </nav>
    
  <div>
     <CartWidget/>
  </div>

  <link to= {"/"}>
 
  </link>

  <link to= {"/cart"}>
    
 </link>


</>
    
  )
}

export default NavBar
