import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='error-container'>
        <h1>OOps! An error occured.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to='/'>
            <button className='go-back-error-page-button'>Go Home</button>
        </NavLink>
    </div>
  )
}

export default ErrorPage