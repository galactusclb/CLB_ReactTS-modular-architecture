import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <h1>404</h1>
    </div>
  )
}
