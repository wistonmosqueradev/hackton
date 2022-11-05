import React from 'react'
import'../components/menu.css'
const Menu = () => {
  return (
    <div>
        <header class="contenedor-general">
        <div  class="contenedor">
        <div class="contenedor-logo">
            <p class="logo"> Codigo / <span class="color-logo">C13</span> </p>
        </div>
        <div class="contenedor-iten">
            <nav >
                <ul class="contenedor-iten-link">
                    <li><a class="enlace" href="">Users</a></li>
                    <li><a class="enlace" href="">Articles</a></li>
                    <li><a class="enlace" href="#noticias">News</a></li>
                </ul>
            </nav>
        </div>    
    </div>
    </header>
    <div className='lema'>
        <h1>Bienvenido Codigo/C13 </h1>
    </div>






      
    </div>
  )
}

export default Menu
