import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  // Routes
  let navigate = useNavigate();

  return (
    <>
      <header>
        <div className='center-text'>
          <h1>Welcome to Cthulhu Beyond</h1>
          <p>To get started, create your first character.</p>
        </div>
      </header>
      <section>
        <div className='center-content'>
          <button onClick={() => { navigate('/new-character') }}>Create New Character</button>
        </div>
      </section>
    </>
  )
}