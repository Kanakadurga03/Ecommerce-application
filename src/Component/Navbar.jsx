import React from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'black'}}>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" style={{fontWeight:"bold"}}>Tech-Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className='nav-item'>
                                <Link to='' className="nav-link active"><FaSearch /></Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='' className="nav-link active"><FaShoppingCart /></Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='' className='nav-link active'><FaUser /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar