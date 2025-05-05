import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/cjclogo.jpeg'

function Header() {
  return (
    <div className='bg-dark p-2 d-flex justify-content-between'>
          <img src={img} alt='image not found' width="200px"></img>
          <div className='mt-3'>
            <Link className='btn btn-light me-4' to={'/add'}>Add Products</Link>
            <Link className='btn btn-light me-4' to={'/view'}>View Products</Link>
        </div>
    </div>
  )
}

export default Header
