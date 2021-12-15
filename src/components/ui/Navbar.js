import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export const Navbar = () => {

    const logo =  `/logo.svg`


    return (
        <>
        <div className='row py-3 color-fondo'>

        </div>
            <nav className="navbar navbar-expand-sm navbar-light text-center bg-light">
                
                <Link 
                    className="navbar-brand text-center" 
                    to="/home"
                >
                    <div className='row'>
                        <div className='col-12 my-auto'>
                            <img height='50px' src={logo} alt='logolg'></img>
                            <span className='my-auto mx-3 fw-bold'>STARBUCKS</span>
                        </div>
                    </div>
                </Link>

                <div className="navbar-collapse text-center">
                    <div className="navbar-nav text-center">

                        <NavLink 
                            className={({ isActive }) => 'nav-item nav-link text-center' + (isActive ? 'active' : '') }
                            to="/product"
                        >
                            Menú
                        </NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}
